interface person {
	name: string;
	house: string;
	age: number;
}
interface soccerFan {
	name: string;
	team: string;
	gamesWatched: number;
}

function printHuman(obj: person & soccerFan) {
	console.log(obj);
}

printHuman({ age: 10, gamesWatched: 5, house: "3 est st", name: "tobias", team: "lakers" });
