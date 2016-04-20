// 'use strict';
//import phoneAnimation from './phone.animation';
import PhoneDetailCtrl from './phone_detail.controller';

export default angular.module('phonecat.detail', [
  'ngRoute',
  'ngAnimate',
  'phonecat.core'
])
  //.animation('.phone', phoneAnimation)
  .controller('PhoneDetailCtrl', PhoneDetailCtrl);