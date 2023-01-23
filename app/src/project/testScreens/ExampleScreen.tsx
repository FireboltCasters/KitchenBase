import React from "react";
import {Button, Text, View} from "native-base";
import {FunctionComponent} from "react";
import {EmptyTemplate, MenuItem, useSynchedState} from "kitcheningredients";
import {RequiredSynchedStates} from "kitcheningredients";
import {HiddenScreen} from "./HiddenScreen";

export const ExampleScreen: FunctionComponent = (props) => {

  const [reloadNumber, setReloadNumber] = useSynchedState(RequiredSynchedStates.menuReloadNumber)

  function addRoute(){
    console.log("addRoute");
    Menu.registerRoute(HiddenScreen, EmptyTemplate, "HiddenScreen", "hidden", null, true);
    Menu.registerCommonMenu(new MenuItem("HiddenScreen", "HiddenScreen", HiddenScreen))
    setReloadNumber(reloadNumber+1 || 1);
  }

  return (
    <View>
      <Text>ExampleScreen</Text>
      <Button onPress={addRoute} ><Text>{"AddRoute test"}</Text></Button>
    </View>
  );
}
