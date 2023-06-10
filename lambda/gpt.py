#GPT2 does not really perform very good in terms of prompt questions, for example, we can't even
#get one single question for it.  The LLM needs to perform better than GPT4 for this to work
#This will serve as an example for now to interact with gpt

import json
import boto3

content_type = 'application/json'
def query_endpoint(encoded_tabular_data):
    endpoint_name = 'jumpstart-ftc-sklearn-classification-linear'
    client = boto3.client('runtime.sagemaker')
    response = client.invoke_endpoint(EndpointName=endpoint_name, ContentType=content_type, Body=encoded_tabular_data)
    return response

def lambda_handler(event, context):
    body = json.loads(event['body'])
    text_input = body.get('ip_count', '')

    # predefined values
    max_length = 110
    no_repeat_ngram_size = 3
    return_full_text = False
    
    payload = {
        "id":"test"
        "ip_count": float(text_input)
    }
    generated_text = query_endpoint(payload)
    return {
        'statusCode': 200,
        'body': json.dumps({'ip_count': text_input, 'generated_text': generated_text})
    }
