import React, {useEffect, useState} from "react";
import {Text, View} from "native-base";
import {FunctionComponent} from "react";
import {EmptyTemplate, MenuItem, RequiredSynchedStates, useSynchedJSONState, useSynchedState} from "kitcheningredients";

export const MyRoot: FunctionComponent = (props) => {

  const [navigationHistory, setNavigationHistory] = useSynchedJSONState(RequiredSynchedStates.navigationHistory)

  return (
    <View>
    </View>
  );
}
