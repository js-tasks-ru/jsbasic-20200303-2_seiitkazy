/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
      var fNum = 1;
      for (var i = 1; i <= n; i++)
        fNum = fNum * i;
      return fNum;
    }

    console.log ( factorial(0) );
    console.log ( factorial(1) );
    console.log ( factorial(3) );
    console.log ( factorial(5) );
