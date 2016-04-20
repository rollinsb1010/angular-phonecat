// 'use strict';

// angular.module('phonecat.list')
//   .controller('PhoneListCtrl', PhoneListCtrl);
class PhoneListCtrl {
  phones:any[];
  orderProp:string;
  query:string;
  constructor(Phone) {
  	this.phones = Phone.query();
  	this.orderProp = 'age';
  }
}

PhoneListCtrl.$inject = ['Phone'];

// function PhoneListCtrl(Phone) {
// 	var vm = this;
// 	vm.phones = Phone.query();
// 	vm.orderProp = 'age';
// }

export default PhoneListCtrl;