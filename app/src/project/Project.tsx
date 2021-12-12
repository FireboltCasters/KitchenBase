import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import {Example} from "./screens/Example";
import {BaseTemplate} from "../KitchenHelper/templates/BaseTemplate";
import {RegisteredRoutesMap} from "../KitchenHelper/navigation/RegisteredRoutesMap";
import {MenuItem} from "../KitchenHelper/navigation/MenuItem";
import {MyMenuRegisterer} from "../KitchenHelper/navigation/MyMenuRegisterer";
import App from "../KitchenHelper/App";

export default class Project {

	static topPluginContent(){
		return null;
	}

	static registerRoutes(){

		// Resource detail
		RegisteredRoutesMap.registerRoute(Example, BaseTemplate, "Example", "example");

		// Side Menu

		// Side Menu for User
		let userMenu = new MenuItem("topExample", "TopExample", null, null, null, null, true);
		MyMenuRegisterer.registerUnauthenticatedMenu(userMenu);

		userMenu.addChildMenuItems(Example);

	}

	static async initApp() {

	}

}

App.registerPlugin(Project);