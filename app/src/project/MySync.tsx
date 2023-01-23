import React, {FunctionComponent, useEffect} from "react";
import {Text, View} from "native-base";
import {BaseTemplate, MenuItem, Navigation} from "kitcheningredients";
import {ConfigHolder} from "kitcheningredients";
import {ExampleParamScreen} from "./testScreens/ExampleParamScreen";
import {ExampleRoutesInformationsScreen} from "./testScreens/ExampleRoutesInformationsScreen";
import {ExampleTemplateUsageScreen} from "./testScreens/ExampleTemplateUsageScreen";

export const MySync: FunctionComponent = (props) => {
  console.log("MySynch");

  const user = ConfigHolder.instance.getUser()
  console.log(user)

  async function load(){

    let exampleParamRoute = Navigation.routeRegister({
      component: ExampleParamScreen,
      template: BaseTemplate,
      params: {
        testParam: 0
      },
    })

    let routes = Navigation.routesRegisterMultipleFromComponents(
      [
        ExampleTemplateUsageScreen,
        ExampleRoutesInformationsScreen,
      ],
      BaseTemplate
    )

    let docs = new MenuItem({
      key: "docs",
      label: "Documentation",
    });

    docs.addChildMenuItems(MenuItem.fromRoutes(routes));
    docs.addChildMenuItem(MenuItem.fromRoute(exampleParamRoute));

    Navigation.menuRegister(docs);

    await ConfigHolder.instance.setSyncFinished(true)
  }

  useEffect(() => {
    load()
  }, [props]);

  return (
    <View>
      <Text>{"MySynching"}</Text>
    </View>
  );
}
