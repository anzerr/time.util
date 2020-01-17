
declare class ENUM {

	SECOND: string;
	MINUTE: string;
	HOUR: string;
	DAY: string;

}

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

declare class Time {

	hrtime(): number;
	now(): number;

}

declare class TimeModule {

	ENUM: ENUM;
	delay(a?: number): Delay;
	time: Time;

}

declare const _default: TimeModule;
export default _default;
