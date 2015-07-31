Is the given Date a leap day?

```javascript
var leapDay = require('leap-day')

typeof leapDay // => 'function'

leapDay(new Date(2016, 1, 29)) // => true

leapDay(new Date(2016, 1, 28)) // => false

leapDay(new Date(2015, 1, 29)) // => false
```
