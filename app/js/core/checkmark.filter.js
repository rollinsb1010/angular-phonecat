// 'use strict';
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    // angular.module('phonecat.core')
    //   .filter('checkmark', checkmarkFilter);
    function checkmarkFilter() {
        return function (input) {
            return input ? '\u2713' : '\u2718';
        };
    }
    exports_1("default", checkmarkFilter);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=checkmark.filter.js.map