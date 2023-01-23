import React, {FunctionComponent} from "react";
import {View, Text, Button} from "native-base";
import {DirectusImage, SynchedState} from "kitcheningredients";

export const ExampleImageScreen: FunctionComponent = (props) => {

  const [assetId, setAssetId] = React.useState("1bb60681-52f4-45dc-9a3b-081bfe4622aa");

  return (
    <View>
      <Text>{"Normal image"}</Text>
      <DirectusImage assetId={assetId} style={{width: 100, height: 100}} />
      <Text>{"Using unsafe access token"}</Text>
      <DirectusImage assetId={assetId} style={{width: 100, height: 100}} useUnsafeAccessTokenInURL={true} />
      <Text>{"Without asset id"}</Text>
      <DirectusImage assetId={null} style={{width: 100, height: 100}} />
      <Text>{"With fallback element showing text"}</Text>
      <DirectusImage assetId={null} style={{width: 100, height: 100}} fallbackElement={<View><Text>{"Showing fallbackElement"}</Text></View>} />
    </View>
  );
}
