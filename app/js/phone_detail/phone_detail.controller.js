// 'use strict';
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PhoneDetailCtrl;
    return {
        setters:[],
        execute: function() {
            PhoneDetailCtrl = (function () {
                function PhoneDetailCtrl($routeParams, Phone) {
                    var _this = this;
                    this.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
                        return _this.mainImageUrl = phone.images[0];
                    });
                }
                PhoneDetailCtrl.prototype.setImage = function (url) {
                    this.mainImageUrl = url;
                };
                return PhoneDetailCtrl;
            }());
            // function PhoneDetailCtrl($routeParams, Phone) {
            // 	var vm = this;
            // 	vm.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
            // 		vm.mainImageUrl = phone.images[0];
            // 	});
            // 	vm.setImage = function(imageUrl) {
            // 		vm.mainImageUrl = imageUrl;
            // 	};
            // }
            PhoneDetailCtrl.$inject = ['$routeParams', 'Phone'];
            exports_1("default",PhoneDetailCtrl);
        }
    }
});
//# sourceMappingURL=phone_detail.controller.js.map