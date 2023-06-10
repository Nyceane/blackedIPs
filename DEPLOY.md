# MERN SaaS Boilerplate

MERN is a boilerplate for building full-stack SaaS applications using Node.js, React and MongoDB.
This is built based off https://github.com/hagopj13/node-express-boilerplate

The documentation will guide you to deploy your app in either of the following ways:
- Docker (recommended)

If you're new to MERN, start with the SETUP instructions, build your app, and when you're done, come back here to deploy.

## Deploy using Docker

This guide will help you deploy your app on a machine using Docker. Why Docker? It is the easiest way to deploy your app in an isolated containerized environment, which allows your app to work the same way on any machine. 

**IMPORTANT** : For this method, you will need a domain name, which can be purchased from any domain name registrar (namecheap, google domains, godaddy etc). After you have access to a domain, add an A record in the domain records to point to the public ip of your host.

Before deploying, make sure that docker is installed on the machine. If not, you can follow the installation steps here: https://docs.docker.com/engine/install/

We will also be using Docker compose to easily spin up multiple containers. You can follow the installation steps for Docker compose here: https://docs.docker.com/compose/install/

1. Copy your app source code to the machine (you may clone your code from your git repository)

2. Configure your environment variables (Make sure that you are using the production keys (Stripe, MongoDB) and not the test keys) : 
	- Make sure the MERN server .env file is present in the server folder. If not, you can create one.
	- Leave the value of `CLIENT_URL` as empty
	- Make sure the MERN client .env file is present in the client folder. If not, you can create one.
	- Leave the value of `REACT_APP_API_URL` as empty

3. Update the config file :
	- Open docker-compose.yml file and replace the email in the command under certbot to your contact email
	- Open nginx.config file inside the client directory, and replace all instances of cloud.rocketapp.me with your domain name
	- Open nginx.setup.config file inside the client directory, and replace all instances of cloud.rocketapp.me with your domain name

4. From the root directory of your source code, run the following command:
	```bash
	sudo docker compose -f docker-compose.yml -f docker-compose.setup.yml up --build -d
	```
	This commans sets up the mongodb database, the rocket server, and the nginx config with certbot to install ssl certificates. To check if the certificates are installed correctly, run the following command:
	```bash
	sudo docker compose exec client ls -la /etc/letsencrypt/live
	```
	If your request was successful, you will see output like this:
	```bash
	total 16
	drwx------ 3 root root 4096 Jun 10 23 16:48 .
	drwxr-xr-x 9 root root 4096 Jun 10 16:48 ..
	-rw-r--r-- 1 root root  740 Jun 10 16:48 README
	drwxr-xr-x 2 root root 4096 Jun 10 16:48 cloud.rocketapp.me
	```

5. Run the following command to run nginx server to serve the client and proxt api requests to the api server:
	```bash
	sudo docker compose up -d --force-recreate --build --no-deps client
	``` 

This will run your app on the machine. This will also create a MongoDB instance on the same machine, and connect the MERN server with this DB. If you want to connect to a different MongoDB instance, open the docker-compose.yml file and remove the mongodb service. In the same file, update the `MONGODB_URL` under the server to point to the required MongoDB instance.

You can test your deployment by making requests and you should see the MERN admin (Make sure that http and https traffic is enabled on the machine (i.e. port 80 and 443 are exposed)). 

6. Renewing certificates: Let’s Encrypt certificates are valid for 90 days, so you will need to renew certificates before they expire. One way to do this is to create a job with the cron scheduling utility. In this case, we will schedule a cron job using a script that will renew our certificates and reload our Nginx configuration.
	- Open the ssl_renew.sh file and replace the path `~/MERN` to your project directory
	- Save the file and run the following command:
		```bash
		chmod +x ssl_renew.sh
		```
	- Run the following commant to open chrontab:
		```bash
		sudo crontab -e
		```
	- At the bottom of the file, add the following line (Replace the path `~/MERN` to your project directory):
		```
		0 12 * * * ~/MERN/ssl_renew.sh >> /var/log/cron.log 2>&1
		```
		This will run the script every day at noon and renew the ssl certificates

Stripe webhook forwarding:
- Login to your Stripe account (https://stripe.com/).
- On the sidebar, click on **Developers** and inside that click on **Webhooks**.
- In the Endpoints section, click on *Add endpoint*.
- Enter the following string : "{your-domain-name}/v1/stripe/stripe-webhook" here. In Events to send, click on recieve all events, and then click on **Add endpoint**.

Congratulations! You have successfully deployed you SaaS app. Navigate to your domain and start using the app!
