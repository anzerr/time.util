
const {TIME} = require('./src/enum.js'),
	Delay = require('./src/delay.js'),
	Time = require('./src/time.js');

const _obj = {
	ENUM: TIME,
	delay: (n) => new Delay(n),
	time: new Time()
};

module.exports = _obj;
module.exports.default = _obj;
