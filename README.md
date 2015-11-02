# autocoerce
[![GitHub version](https://badge.fury.io/gh/th-ko%2Fautocoerce.svg)](https://badge.fury.io/gh/th-ko%2Fautocoerce) [![npm version](https://badge.fury.io/js/autocoerce.svg)](https://badge.fury.io/js/autocoerce)

A tiny library that automatically converts JSON fields to numbers or dates

## Getting Started
```
var autocoerce = require('autocoerce');

var myObj = {
	someText: "Hello",
	someNumber: "42",
	someDate: "2014-12-31T23:00:00.000Z"
}
var newObj = autocoerce(myObj);
=> {
	someText: "Hello",
	someNumber: 42,
	someDate: new Date("2014-12-31T23:00:00.000Z")
}
```

Optionally you can use a weaker date check which compares only the date part of the string
```
var autocoerce = require('autocoerce');

var myObj = {
	someText: "Hello",
	someNumber: "42",
	someDate: "2014-12-31"
}
var newObj = autocoerce(myObj, true);
=> {
	someText: "Hello",
	someNumber: 42,
	someDate: new Date("2014-12-31T00:00:00.000Z")
}
```