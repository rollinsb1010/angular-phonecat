// 'use strict';

// angular.module('phonecat.core')
//   .filter('checkmark', checkmarkFilter);

export default function checkmarkFilter() {
	return function(input:boolean):string {
      return input ? '\u2713' : '\u2718';
	};
}