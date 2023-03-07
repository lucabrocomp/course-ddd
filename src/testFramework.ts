import {CommandHandler} from "./CommandHandler";

let _history: Array<any> = [];
let _publishedEvents: Array<any> = [];

function areEqual(arr1: Array<any>, arr2: Array<any>) {
	const result = JSON.stringify(arr1) === JSON.stringify(arr2);
	if (!result) {
		throw "Not Equal!!!";
	}
}

export function given(events: Array<any>): void {
	_history = events;
}

export function when(cmd: any): void {
	const handler = new CommandHandler(_history, (e: any) => _publishedEvents.push(e));
}

export function thenExpect(expectedEvents: Array<any>) {
	areEqual(_publishedEvents, expectedEvents);
}

