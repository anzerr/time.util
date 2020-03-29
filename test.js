
const {time, delay} = require('./index.js'),
	assert = require('assert');

const measure = (cd) => {
	let start = process.hrtime();
	cd();
	let end = process.hrtime(start);
	return (end[0] * 1e9 + end[1]);
};

const NS_PER_SEC = 1e9;
const runs = 1000000;

console.log('time.hrtime', measure(() => {
	let a = null;
	for (let i = 0; i < runs; i++) {
		a = time.hrtime();
	}
}) / NS_PER_SEC);

console.log('time.now', measure(() => {
	let a = null;
	for (let i = 0; i < runs; i++) {
		a = time.now();
	}
}) / NS_PER_SEC);

setTimeout(() => {
	assert.equal(Math.floor(time.hrtime() / 100), Math.floor(time.now() / 100));
}, 1000 * 10);

assert.equal(delay(100).second(5).minute(1.3).get, 83100);
