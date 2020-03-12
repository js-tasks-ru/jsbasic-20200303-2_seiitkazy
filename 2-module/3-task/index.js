'use strict'

let calculator = {

  read: function (num1, num2) {
    this.a = num1;
    this.b = num2;
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

};

// calculator.sum();
// calculator.mul();

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
