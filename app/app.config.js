export default {
    extra: {
        BACKEND_URL: process.env.FRONTEND_CUSTOM_URL_FOR_BACKEND || process.env.BACKEND_URL || "https://se-services.informatik.uos.de/hiwis/api",
        BASE_PATH: process.env.BASE_PATH || "myapp/app/",
    },
        "scheme": "myapp",
        "name": "KitchenSink-app-native-base",
        "slug": "kitchensink-app-native-base",
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
            "bundleIdentifier": "de.nilsbaumgartner.raiders-of-storm"
        },
        "android": {
            "adaptiveIcon": {
                "foregroundImage": "./assets/adaptive-icon.png",
                "backgroundColor": "#FFFFFF"
            },
            "package": "com.geekyants.kitchensinkappnativebase"
        },
        "web": {
            "favicon": "./assets/favicon.png",
            "description": "A sample application that showcases various components that come built-in with NativeBase v3."
        },
        "description": ""
}
