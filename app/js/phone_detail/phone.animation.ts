'use strict';

angular.module('phonecat.detail')
  .animation('.phone', phoneAnimation);

function phoneAnimation() {

	var animateUp = function(element, className, done) {
    if(className != 'active') {
    	addClass: animateUp,
    	removeClass: animateDown
    };
	}

}