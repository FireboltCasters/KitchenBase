function getBackendURL(){
    let fallbackBackendUrl = "http://127.0.0.1/myapp/api";
    fallbackBackendUrl = "https://nilsbaumgartner.de/rocketmeals/api";

    let backendUrl = process.env.BACKEND_URL

    let customBackendUrl = process.env.CUSTOM_BACKEND_URL;
    if(!!customBackendUrl && customBackendUrl!==""){
        backendUrl = customBackendUrl
    }

    if(!backendUrl){
        backendUrl = fallbackBackendUrl
    }
    return backendUrl;
}

export default {
    extra: {
        BACKEND_URL: getBackendURL(),
        BASE_PATH: process.env.BASE_PATH || "",
    },
    "scheme": "myapp",
    "name": "rocket-meals-app",
    "slug": "rocket-meals-app",
    "version": "1.0.2",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
        "image": "./assets/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
    },
    "updates": {
        "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
        "supportsTablet": true,
        "bundleIdentifier": "de.fireboltcasters.rocketmealsdemo"
    },
    "android": {
        "adaptiveIcon": {
            "foregroundImage": "./assets/adaptive-icon.png",
            "backgroundColor": "#FFFFFF"
        },
        "package": "de.fireboltcasters.rocketmealsdemo"
    },
    "web": {
        "favicon": "./assets/favicon.png",
        "description": "A sample application that showcases various components that come built-in with NativeBase v3."
    },
    "description": ""
}
