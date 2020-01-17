
### `Intro`
![GitHub Actions status | linter](https://github.com/anzerr/time.util/workflows/linter/badge.svg)
![GitHub Actions status | publish](https://github.com/anzerr/time.util/workflows/publish/badge.svg)

small time util

#### `Install`
``` bash
npm install --save git+https://git@github.com/anzerr/time.util.git
```

### `Example`
``` javascript
const {delay, time} = require('time.util');

const start = time.hrtime();
setTimeout(() => {
    console.log('sleep for', time.hrtime() - start);
}, delay(100).second(1.5).minute(0.1).get);
```