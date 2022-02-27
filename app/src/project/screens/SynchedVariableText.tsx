import React, {useEffect, useState} from "react";
import {Input, Text, View} from "native-base";
import ServerAPI from "../../KitchenHelper/ServerAPI";
import {useSynchedState} from "../../KitchenHelper/synchedstate/SynchedState";
import {MySynchedStates} from "../helper/MySynchedStates";

export const SynchedVariableText = (props) => {

	const [synchedText, setSynchedText] = useSynchedState(MySynchedStates.exampleSynchedText);

	// corresponding componentDidMount
	useEffect(() => {

	}, [props.route.params])

	return(
		<>
			<Text>{"Synched Text"}</Text>
			<Text>{synchedText}</Text>
			<View style={{marginVertical: 10}} >
				<Input
					value={synchedText}
					onChange={(event) => { // @ts-ignore
						setSynchedText(event.nativeEvent.text)
					}} placeholder="Synched Text" size="lg" />
			</View>
		</>
	)
}