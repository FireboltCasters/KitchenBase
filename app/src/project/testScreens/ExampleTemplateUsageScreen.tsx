import React, {FunctionComponent} from "react";
import {Divider, Text, View} from "native-base";

export const ExampleTemplateUsageScreen: FunctionComponent = (props) => {

  return (
    <View>
        <Text>{"Long text will follow to show the different styles of the templates:"}</Text>
        <Divider/>
    </View>
  );
}
