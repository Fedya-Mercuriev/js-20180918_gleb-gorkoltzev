'use strict';

/**
 * Функция выполняет наследование
 * @param {Function} Main - класс который должен стать наследником
 * @param {Function} Parent - родительский класс
 */
function extendClass(Main, Parent) {
    // здесь ваш код наследования
    Main.prototype = Object.create(Parent.prototype);
}

function Animal() {
}

Animal.prototype.walk = function () {}


function Rabbit() {
}

// вызов функции, которая выполняет наследование
extendClass(Rabbit, Animal);

Rabbit.prototype.jump = function () {}

let rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Animal);

console.log(typeof rabbit.walk === 'function');
console.log(typeof rabbit.jump === 'function');