import React, {useEffect, useState} from "react";
import {Text} from "native-base";
import ServerAPI from "../../KitchenHelper/ServerAPI";

export const Example = (props) => {

	const [ms, setMs] = useState(null);
	const [date, setDate] = useState(new Date());
	const [info, setInfo] = useState(null);

	async function downloadServerStatus(){
		let directus = ServerAPI.getClient();
		let startTime = performance.now()
		await directus.server.ping();
		let endTime = performance.now();
		let msCalculated = endTime-startTime;
		msCalculated = msCalculated.toFixed(0);
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
		</>
	)
}