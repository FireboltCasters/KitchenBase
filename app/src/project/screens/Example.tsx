import React, {useEffect, useState} from "react";
import {Input, Text, View} from "native-base";
import ServerAPI from "../../KitchenHelper/ServerAPI";
import {useSynchedState} from "../../KitchenHelper/synchedstate/SynchedState";
import {MySynchedStates} from "../helper/MySynchedStates";

export const Example = (props) => {

	const [synchedText, setSynchedText] = useSynchedState(MySynchedStates.exampleSynchedText);
	const [ms, setMs] = useState(null);
	const [date, setDate] = useState(new Date());
	const [info, setInfo] = useState(null);

	async function downloadServerStatus(){
		let directus = ServerAPI.getClient();
		let startTime = performance.now()
		await directus.server.ping();
		let endTime = performance.now();
		let msCalculated = endTime-startTime;
		msCalculated = parseInt(msCalculated.toFixed(0));
		setMs(msCalculated);
		setDate(new Date());

		try{
			let users = await directus.users.readMany();
			setInfo(users);
		} catch (err){
			console.log(err);
		}
		//setTimeout(() => { downloadServerStatus(); }, 1000);
	}

	// corresponding componentDidMount
	useEffect(() => {
		downloadServerStatus()
	}, [props.route.params])

	return(
		<>
			<Text>{"Welcome Home"}</Text>
			<Text>{"MS: "+ms}</Text>
			<Text>{date.toString()}</Text>
			<Text>{JSON.stringify(info, null, 4)}</Text>
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