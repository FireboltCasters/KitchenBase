export class MySynchedStates {

	static exampleSynchedText = "SynchedStorage.exampleSynchedText"

	static getListOfSynchedKeys(): string[]{
		let classKeys = Object.keys(MySynchedStates);
		let synchedKeys = [];
		for(let classKey of classKeys){
			let synchedKey = MySynchedStates[classKey];
			synchedKeys.push(synchedKey)
		}
		return synchedKeys;
	}

}