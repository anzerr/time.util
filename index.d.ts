
declare class Delay {

	second(n: number): Delay;
	minute(n: number): Delay;
	hour(n: number): Delay;
	day(n: number): Delay;
	s(n: number): Delay;
	m(n: number): Delay;
	h(n: number): Delay;
	d(n: number): Delay;
	get: number;

}

declare class TimeKeeper {

	hrtime(): number;
	now(): number;

}

export const ENUM: {
	SECOND: string;
	MINUTE: string;
	HOUR: string;
	DAY: string;
};
export const time: TimeKeeper;
export const delay: (a?: number) => Delay;
