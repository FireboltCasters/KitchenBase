import React, {FunctionComponent} from "react";
import {Text, View} from "native-base";
import {Icon, TextWithIcon} from "kitcheningredients";

export const ExampleIconScreen: FunctionComponent = (props) => {

  return (
    <View>
      <Icon name={"google-maps"} />
      <TextWithIcon icon={"google-maps"} content={"Hi"} />
      <TextWithIcon icon={<Icon name={"google-maps"} />} content={"Hi"} />
      <TextWithIcon icon={<Icon name={"google-maps"} />} content={<Text>{"Whats up"}</Text>} />
    </View>
  );
}
