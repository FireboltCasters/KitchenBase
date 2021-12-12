import React, {useEffect, useState} from "react";
import {Text} from "native-base";
import ServerAPI from "../../KitchenHelper/ServerAPI";

export const Example = (props) => {

	const [ms, setMs] = useState(null);
	const [info, setInfo] = useState(null);

	async function downloadServerStatus(){
		let directus = ServerAPI.getClient();
		let startTime = performance.now()
		await directus.server.ping();
		let endTime = performance.now();
		let msCalculated = endTime-startTime;
		msCalculated = msCalculated.toFixed(0);
		setMs(msCalculated);

		let users = await directus.users.readMany();
		setInfo(users);
		setTimeout(() => { downloadServerStatus(); }, 1000);
	}

	// corresponding componentDidMount
	useEffect(() => {
		downloadServerStatus()
	}, [props.route.params])

	return(
		<>
			<Text>{"Welcome Home"}</Text>
			<Text>{"MS: "+ms}</Text>
			<Text>{JSON.stringify(info, null, 4)}</Text>
		</>
	)
}