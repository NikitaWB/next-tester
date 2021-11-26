"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Typescript() {
    var _a = (0, react_1.useState)(0.0), counter = _a[0], setCounter = _a[1];
    (0, react_1.useEffect)(function () {
        var interval = setInterval(function () {
            setCounter(function (count) { return count + 1; });
        }, 1000);
        return function () { return clearInterval(interval); };
    }, []);
    return (<div>
      <h1>This is written with Typescript!</h1>
      <h2>You have been here for {counter} seconds...</h2>
    </div>);
}
exports["default"] = Typescript;
