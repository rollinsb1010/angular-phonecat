// 'use strict';
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PhoneListCtrl;
    return {
        setters:[],
        execute: function() {
            // angular.module('phonecat.list')
            //   .controller('PhoneListCtrl', PhoneListCtrl);
            PhoneListCtrl = (function () {
                function PhoneListCtrl(Phone) {
                    this.phones = Phone.query();
                    this.orderProp = 'age';
                }
                return PhoneListCtrl;
            }());
            PhoneListCtrl.$inject = ['Phone'];
            exports_1("default",PhoneListCtrl);
        }
    }
});
//# sourceMappingURL=phone_list.controller.js.map