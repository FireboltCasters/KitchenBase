#KitchenBase

## Setup

- Pull submodules: ```git submodule update --init --recursive```
- Edit .env with your parameters

### Native Mobile App

In order to use the login system with SSO, we need to configure the deep linking.
- Deeplinking: https://reactnavigation.org/docs/deep-linking/
- Example ios: ```npx uri-scheme add myapp --ios```
- Example android: ```npx uri-scheme add myapp --android```

## Docker-Compose (with Server-Top-
- Install and configure a proxy to your docker-instance (for example with https://github.com/FireboltCasters/Server-Toplevel-Proxy)
- Run ```docker-compose up```


## Web App

- Run ```npm run web``` (with active internet connection
