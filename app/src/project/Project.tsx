import {Example} from "./screens/Example";
import {BaseTemplate} from "../KitchenHelper/templates/BaseTemplate";
import {RegisteredRoutesMap} from "../KitchenHelper/navigation/RegisteredRoutesMap";
import {MenuItem} from "../KitchenHelper/navigation/MenuItem";
import {MyMenuRegisterer} from "../KitchenHelper/navigation/MyMenuRegisterer";
import {SynchedVariableText} from "./screens/SynchedVariableText";
import SynchedState from "../KitchenHelper/synchedstate/SynchedState";
import {MySynchedStates} from "./helper/MySynchedStates";

export default class Project {

	static topPluginContent(){
		return null;
	}

	static registerRoutes(){
		SynchedState.registerSynchedStates(MySynchedStates.getListOfSynchedKeys())
		// Resource detail
		RegisteredRoutesMap.registerRoute(Example, BaseTemplate, "Example", "example");
		RegisteredRoutesMap.registerRoute(SynchedVariableText, BaseTemplate, "SynchedVariableText", "synchedVariableText")

		// Side Menu for User
		let userMenu = new MenuItem("topExample", "TopExample", null, null, null, null, true);
		MyMenuRegisterer.registerCommonMenu(userMenu);
		userMenu.addChildMenuItems(new MenuItem("example", "Example", Example));
		userMenu.addChildMenuItems(new MenuItem("synchedVariableText", "SynchedVariableText", SynchedVariableText));

	}

	static async initApp() {
		console.log("Project init")

	}

}