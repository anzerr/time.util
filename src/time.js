

class Time {

	constructor() {
		this._ref = {
			epoch: this.now(),
			valid: true,
			start: process.hrtime()
		};
	}

	hrtime() {
		const dif = process.hrtime(this._ref.start);
		return this._ref.epoch + ((dif[0] * 1e3) + (dif[1] / 1e6));
	}

	now() {
		const d = new Date();
		return d.getTime() + (d.getTimezoneOffset() * 60000);
	}

}

module.exports = Time;
