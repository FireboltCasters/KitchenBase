import React from "react";

import {
  PluginInterface,
} from "kitcheningredients";

import {SynchedStateKeys} from "./helper/SynchedStateKeys";
import {StorageKeys} from "./helper/StorageKeys";
import {MySync} from "./MySync";
import {MyLoading} from "./MyLoading";
import {MyRoot} from "./MyRoot";
import {ExampleHomeComponent} from "./testScreens/ExampleHomeComponent";

export default class Project extends PluginInterface{

	constructor() {
		super();
	}

	getSynchedStateKeysClass(){
		return SynchedStateKeys;
	}

	getStorageKeysClass(){
		return StorageKeys;
	}

  async registerRoutes(user, role, permissions){
	  /**
	  	  console.log("registerRoutes");
	  	  console.log(user);
	  Menu.registerRoute(ExampleScreen, EmptyTemplate, "Example", "example");
    Menu.registerCommonMenu(new MenuItem("Example", "Example"+user?.role, ExampleScreen))
     */
	}

	async initApp() {
		console.log("Project init")
	}

	async onLogin(user, role){

	}

	async onLogout(error){
		if(!error){
			//normal logout
		} else {
			//logout on error
		}
	}

	getAboutUsComponent() {
    return null
	}

	getPrivacyPolicyComponent() {
    return null
	}

	getTermsAndConditionsComponent() {
    return null
	}

	getHomeComponent(): any {
    return <ExampleHomeComponent />
	}

  getLoadingComponent(){
	  return <MyLoading />;
  }

  getSyncComponent(): any {
    return <MySync />
  }

	getRootComponent(){
	  return <MyRoot />
	}

	renderCustomAuthProviders(serverInfo): []{
		//@ts-ignore
		return null;
	}

	getSettingsComponent(): any {
		//return null // we have overwritten it
	}

	getCustomProjectLogoComponent(): any {

	}

}
