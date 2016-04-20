// 'use strict';

// angular.module('phonecat.detail')
//   .controller('PhoneDetailCtrl', PhoneDetailCtrl);

interface PhoneRouteParams {
  phoneId: string
}

class PhoneDetailCtrl {
  phone:any;
  mainImageUrl:string;
  constructor($routeParams:PhoneRouteParams, Phone) {
    this.phone = Phone.get({phoneId: $routeParams.phoneId}, (phone) =>
      this.mainImageUrl = phone.images[0]
    );
  }

  setImage(url:string) {
    this.mainImageUrl = url;
  }
}

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

export default PhoneDetailCtrl;