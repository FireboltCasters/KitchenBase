import React, {FunctionComponent} from "react";
import {Text, View} from "native-base";

export const MyLoading: FunctionComponent = (props) => {
  console.log("MyLoading");

  return (
    <View>
      <Text>{"MyLoading"}</Text>
    </View>
  );
}
