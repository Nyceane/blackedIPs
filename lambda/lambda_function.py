import json
import boto3

def query_endpoint(payload):
    endpoint_name = 'jumpstart-ftc-sklearn-classification-linear'
    client = boto3.client('runtime.sagemaker')

    # Convert the data to a CSV string
    payload_csv = '\n'.join(map(str, [payload])) + '\n'
    print(payload_csv)
    response = client.invoke_endpoint(EndpointName=endpoint_name, ContentType="text/csv", Body=payload_csv)
    return response

def lambda_handler(event, context):
    body = json.loads(event['body'])
    ip_count = float(body.get('ip_count', 0))
    
    response = query_endpoint(ip_count)
    response_body = response['Body'].read().decode('utf-8')
    response_json = json.loads(response_body)

    # Extract probabilities
    probabilities = response_json['probabilities'][0]
    prob_true = probabilities[0]
    prob_false = probabilities[1]

    # Determine if bot is detected
    bot_detected = prob_true >= prob_false

    return {
        'statusCode': 200,
        'body': json.dumps({
            'ip_count': ip_count, 
            'bot_detected': bot_detected,
            'probability': prob_true
        })
    }