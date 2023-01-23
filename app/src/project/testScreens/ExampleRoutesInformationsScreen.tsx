import React, {FunctionComponent} from "react";
import {Text, View} from "native-base";
import {Navigation} from "kitcheningredients";

export const ExampleRoutesInformationsScreen: FunctionComponent = (props) => {

  const registeredRoutes = Navigation.routeGetRegistered()

  return (
    <View>
      <Text>{JSON.stringify(registeredRoutes, null, 2)}</Text>
    </View>
  );
}
