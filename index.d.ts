
declare class Delay {

	second(n: number): number;
	minute(n: number): number;
	hour(n: number): number;
	day(n: number): number;
	s(n: number): number;
	m(n: number): number;
	h(n: number): number;
	d(n: number): number;
	get(): number;

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
