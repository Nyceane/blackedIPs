# SaaS Boilerplate

This documentation is split into two sections:
- BlackedIPs Server (the back-end Node application) 
- BlackedIPs Client (the front-end React client)

If you're new to BlackedIPs, start with the BlackedIPs Server installation instructions – this is the backbone of the application and comes with all BlackedIPs packages.

Once you've got the server application installed and running, then you can work through the BlackedIPs Client installation instructions.

## BlackedIPs Server Installation

Before you can start building new app idea, you'll need to set up a few things first. 

1. Install Node.js : 
- Head over to [nodejs.org](nodejs.org) and download and install the latest version.
- Install Node Package Manager (NPM) - NPM is a huge repository of code modules that you can download and use in your projects. BlackedIPs relies on several third-party libraries, so go ahead and download and install [NPM](https://www.npmjs.com/get-npm).
2. Create an empty database :
- You'll need an empty MongoDB database for storing your application data so go ahead and set up a new one using your favourite MongoDB database service (eg: http://mongodb.com/ ).
- If you're using [MongoDB Atlas](http://mongodb.com/): follow the steps to create a cluster, once the cluster is created, click on connect, Add your IP address and create a database user. Then, click on Choose a connection method, and select "Connect your application". Select Node.js driver and version as 3.6 or later, then copy and save the URL somewhere safe (eg: mongodb+srv://admin:<password>@cluster0.abcd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority). Don't forget to replace <password> with the password for the admin user. Replace myFirstDatabase with the name of the database that connections will use by default. 
3. Register a Stripe account for payments :
- [Stripe](stripe.com) is an affordable and developer friendly payments platform that can handle almost any payment scenario you need.
- BlackedIPs takes care of the hard-work of creating and managing subscriptions in your application, but you will need to create a Stripe account and configure a few settings before you can start processing payments.
- Head over to [Stripe](stripe.com) and create your account. Setup is free – you'll only be charged a small fee on each transaction that you process.
- Once you've registered and signed in to your account, you'll be presented with your Stripe dashboard.
	- Stripe has two development modes : 
		- Test
		- Live 
	- Test mode is a great feature that enables you to build and test your payments engine without using your real credit cards. You can use test card numbers to test different scenarios and error messages.
	Go ahead and toggle the View Test Data switch in the left sidebar menu to start working in test mode.
	- Create a Product : 
		- Click on Products and click the + Add Product button. Enter a product name (eg : Basic Plan), description (eg : This is the basic subscription). 
		- **IMPORTANT** : Click on additional options, then click on Add metadata, set the key as "type" (without quotes) and the value as a unique type name for	this product (eg: "basic").
		- Add pricing plans, select Standard pricing, set the price and currency and set the interval to recurring to create a subscription. You can also set 	the billing period here.
		- **IMPORTANT** : Once you have created the product, go to the product page. Then in the Pricing section, click on the Price item. Then once on the price page, click on Edit Metadata, set the key as "type" (without quotes) and the value as the same value you used before.
		- Repeat the above steps to add more products
	- Copy The API Keys : 
		- Finally, make a note of the API keys. 
			- Stripe has two API keys: 
				- Publishable Key (used client-side)
				- Secret Key (used server-side)
			- There are two sets of keys for working with live data and test data. 
		- Click on Developers > API Keys
			Copy the API keys somewhere safe for now. You'll need them soon. During development, you'll use the test API keys, but when you deploy your application – ensure you switch these to the live keys.
4. (Optional) Create a Github app for Oauth Authentication :
- To use the Github OAuth authentication methods, you will need to obtain appropriate credentials: Client ID, Client Secret.
- Go to [Github Account Settings](https://github.com/settings/profile)
- Select **Developer settings** from the sidebar
- Then click on **OAuth Apps** and then on **Register new application**
- Enter *Application Name* and *Homepage URL*
- For *Authorization Callback URL*: http://localhost:8080/v1/auth/github/callback
- Click **Register application**
- Now copy and save *Client ID* and *Client Secret* keys somewhere safe for now.

5. (Optional) Create a Google app for Oauth Authentication :
- To use the Google OAuth authentication methods, you will need to obtain appropriate credentials: Client ID, Client Secret.
- Go to [Google Cloud Console](https://console.cloud.google.com/home/dashboard)
- Select **Create Project** button
- Then click on **APIs & Services** in the sidebar and select API tab
- Click on Create Credentials then OAuth Client ID
- Click on configure consent screen and complete the process
- In the scopes section, make sure to select email, profile and openid
- Again, under APIs & Services in the sidebar click on Credentials tab then Create Credentials then OAuth Client ID
- Application Type: Web Application
- *Authorized Javascript origins*: http://localhost:8080
- *Authorized redirect URI*: http://localhost:8080/v1/auth/google/callback
- Now copy and save *Client ID* and *Client Secret* keys somewhere safe for now.

6. Install BlackedIPs Server :
	- Open up a new terminal window and navigate to the server folder inside the BlackedIPs directory and run the following command: "npm install"
	- Copy the .env.example file to .env using: "cp .env.example .env"
	- Open the .env file, enter your MongoDB URL in the MONGODB_URL_TEST and the MONGODB_URL field, enter your Stripe Secret Key in the STRIPE_SECRET_TEST field. (Optional) Enter your Github Client Id in the GITHUB_ID field and your Github Client Secret in the GITHUB_SECRET field. (Optional) Enter your Google Client Id in the GOOGLE_ID field and your Google Client Secret in the GOOGLE_SECRET field.
	- In the terminal, run "yarn dev" to start the development server : This will start the BlackedIPs development server.

7. Stripe webhook forwarding : 
	- Install the Stripe CLI : https://stripe.com/docs/stripe-cli#install
	- Login with your Stripe account : After installing the Stripe CLI, you must pair it with your Stripe account. To do so, run "stripe login" in the terminal. You’ll be prompted to launch your browser and login to the Stripe Dashboard to grant the Stripe CLI access to your account.
	- Run the following command in the terminal : stripe listen --forward-to localhost:8080/v1/stripe/stripe-webhook

## BlackedIPs Client Installation

1. Install BlackedIPs Client :
	* Open up a new terminal window and navigate to the client folder inside the BlackedIPs directory and run the following command: "npm install"
	* Copy the .env.example file to .env using: "cp .env.example .env"
	* Open the .env file, enter your Stripe Publishable Key in the REACT_APP_STRIPE_PUBLIC_KEY field.
	* In the terminal, run the following command : "npm start". This will open a new browser window with the homepage at http://localhost:5173/. 
	* Please navigate to http://localhost:5173/auth/create-account to create a new account.
	* Navigate to http://localhost:5173/app to open the BlackedIPs Dashboard.

This will start the BlackedIPs Server and the BlackedIPs client. You can now make changes to the code and see the changes without restarting the server or the client.

By default, sign up creates users with "user" role. To create a user with "admin" role, go to the mongoDB database (mongodb.com).Then go to collections, in your database select users. Then for any user, edit the role to "admin". After this, you can use this admin user to create more admin users from the "Users" tab in the BlackedIPs dashboard. 
