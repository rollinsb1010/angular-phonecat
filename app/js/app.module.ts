//'use strict';
import core from './core/core.module';
import phoneDetail from './phone_detail/phone_detail.module';
import phoneList from './phone_list/phone_list.module';


angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  core.name,
  phoneDetail.name,
  phoneList.name
]).config(configure);

configure.$inject = ['$routeProvider'];

function configure($routeProvider) {
	$routeProvider.
	  when('/phones', {
	  	templateUrl: 'js/phone_list/phone-list.html',
	  	controller: 'PhoneListCtrl',
	  	controllerAs: 'vm'
	  }).
	  when('/phones/:phoneId', {
	  	templateUrl: 'js/phone_detail/phone_detail.html',
	  	controller: 'PhoneDetailCtrl',
	  	controllerAs: 'vm'
	  }).
	  otherwise({
	  	redirectTo: '/phones'
	  });
}

angular.bootstrap(document.documentElement, ['phonecatApp']);