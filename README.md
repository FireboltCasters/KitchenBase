#KitchenBase

## Setup

- Pull submodules: ```git submodule update --init --recursive```
- Edit .env with your parameters

### Native Mobile App

In order to use the login system with SSO, we need to configure the deep linking.
- Deeplinking: https://reactnavigation.org/docs/deep-linking/
- Example ios: ```npx uri-scheme add myapp --ios```
- Example android: ```npx uri-scheme add myapp --android```

## Docker-Compose
- Install and configure a proxy to route requests your docker-instance (for example with https://github.com/FireboltCasters/Server-Toplevel-Proxy)
- Run ```docker-compose up --build```
- After that you can simple start and stop with ```docker-compose up``` and ```docker-compose down```


## Web App

- Run ```npm run web``` (with active internet connection


## Ads
Please read the AD_README.md
