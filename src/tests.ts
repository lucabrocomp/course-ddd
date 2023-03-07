import {given, thenExpect, when} from "./testFramework";

var Marco = 1;
var Daniele = 2;

var Seat1 = "a";
var Seat2 = "b";

function isSeatAvailable(
	given: (events: Array<any>) => void,
	when: (cmd: any) => void,
	thenExpect: (expectedEvents: Array<any>) => void) {

	given([new SeatReserved(Seat1, Marco), new ReserveSeat(Seat1, Marco)])

}

isSeatAvailable(given, when, thenExpect);