/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function sum(m, n) {

	var result = 0;

 	for (var i = 0; i < arguments.length; i++) {
    	result += arguments[i];
  	}

  	return result;
}

alert ( sum(1, 1) );
alert ( sum(2, 5) );