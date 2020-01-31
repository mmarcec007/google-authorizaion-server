# Simple Google Auth server based on ExpressJS

#### Preconditions:
* installed Node JS on your machine
* downloaded service account from your Google Cloud Console project

#### Instructions for the local server to run properly:
* clone repo via `git clone https://github.com/mmarcec007/google-authorizaion-server.git`
* install dependencies via npm install
* create .env file with the following properties
* * service_account_email (in your service-account-json file client_email)
* * service_account_private_key (in your service-account-json file private_key)
* run start script via  `npm start`
* to modify scopes, just go to data/google-apis-scopes.json and modify the scopes by your needs
