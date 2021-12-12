/**
 * This file handles iOS and Android Builds
 * If you want to adapt the Web-App Entryfile open: index.web.js
 */
import { registerRootComponent } from 'expo';
import codePush from "react-native-code-push";
import {CodePushWrapper} from "./src/KitchenHelper/codepush/CodePushWrapper";
import config from "./config.json";
import configIgnoreLogs from "./configIgnoreLogs.json";
import App from "./src/KitchenHelper/App";
import {Platform, LogBox} from "react-native";
import * as SplashScreen from 'expo-splash-screen';

async function main() {
    if (!!config.logs && config.logs.hideDefaultWarnings) {
        LogBox.ignoreLogs(configIgnoreLogs);
    }

    let isIOS = Platform.OS === "ios";
    console.log("Platform: " + Platform.OS);

    const codepushConfig = config.codepush || {};
    const codepushActive = codepushConfig.active || false;
    const deploymentType = codepushConfig.deploymentType || null;
    const deploymentKeys = codepushConfig.keys || {};
    let deploymentKeysForOS = isIOS ? deploymentKeys["ios"] : deploymentKeys["android"];
    if (!deploymentKeysForOS) {
        deploymentKeysForOS = {};
    }
    let deploymentKey = null;
    if (!!deploymentType) {
        deploymentKey = deploymentKeysForOS[deploymentType];
    }

    console.log("codepushActive: " + codepushActive);
    console.log("deploymentType: " + deploymentType);
    console.log("deploymentKey: " + deploymentKey);

    if (!!codepushActive && !!deploymentType && !!deploymentKey) { //if codepush is used
        const FREQUENCY = codePush.CheckFrequency.ON_APP_RESUME
        const codePushOptions = {
            deploymentKey: deploymentKey,
            checkFrequency: FREQUENCY,
            installMode: codePush.InstallMode.ON_NEXT_RESUME,
        }

        // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
        // It also ensures that whether you load the app in the Expo client or in a native build,
        // the environment is set up appropriately
        SplashScreen.preventAutoHideAsync();
        registerRootComponent(codePush(codePushOptions)(CodePushWrapper));
    } else {
        // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
        // It also ensures that whether you load the app in the Expo client or in a native build,
        // the environment is set up appropriately
        registerRootComponent(App);
    }
}
main();