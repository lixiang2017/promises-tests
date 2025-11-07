"use strict";

var promisesAplusTests = require("./lib/programmaticRunner");
var adapter = require("./test-adapter");

promisesAplusTests(adapter, function (err) {
    if (err) {
        console.log("失败的测试数量:", err);
    } else {
        console.log("所有测试通过!");
    }
});