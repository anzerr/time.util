
const {TIME} = require('./enum.js'),
	is = require('type.util');

class Delay {

	constructor(n = 0) {
		this._n = n;
		if (!is.number(this._n)) {
			throw new Error('argument should be a number');
		}
	}

	second(n) {
		this._n += TIME.SECOND * n;
		return this;
	}

	minute(n) {
		this._n += TIME.MINUTE * n;
		return this;
	}

	hour(n) {
		this._n += TIME.HOUR * n;
		return this;
	}

	day(n) {
		this._n += TIME.DAY * n;
		return this;
	}

	s(n) {
		return this.second(n);
	}

	m(n) {
		return this.minute(n);
	}

	h(n) {
		return this.hour(n);
	}

	d(n) {
		return this.day(n);
	}

	get get() {
		if (!is.number(this._n)) {
			throw new Error('value is NaN where all your arguments numbers?');
		}
		return this._n;
	}

}

module.exports = Delay;
