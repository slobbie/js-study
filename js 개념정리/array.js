'use strict'

// Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];


//2. index position

const fruits = ['사과','바나나']; 
console.log(fruits);
console.log(fruits.length);
console.log(fruits['0']);
console.log(fruits['1']);

// 배열은 index를 전달하게 되면 index에 해당하는  velue 를 받아올수 있다
//배열의 첫번쨰를 찾을때는 0
// 배열의 마지막에 있는 value를 찾을떄는

console.log(fruits.length - 1);


// 3. looping over an array
// print all  fruits

console.clear(); 

//a. for
for ( let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//b. for of

for (let fruit of fruits) {
    console.log(fruit);
}

//c. foreach

fruits.forEach((fruit, index) => console.log(fruit));


//4. Addtion , deletion , copy
// push: add an item to the and

fruits.push('딸기','복숭아');
console.log(fruits);


// pop: remove an item from the and

fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging 
fruits.unshift('복숭아', '레몬');
console.log(fruits);


// shift: remove an item from the benigging

fruits.shift();
console.log(fruits);


// note!! sjift, unshift are slower the pop, push

// splice: remove an item by index position

fruits.push('귤','키위');
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);

fruits.splice(1, 1, '멜론','수박');
console.log(fruits);

// combine two arrays

const fruits2 = ('망고','두리안'); 

const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. searching

// indexof: find the index
console.clear();
console.log(fruits)
console.log(fruits.indexOf('키위'))


// includes

console.log(fruits.includes('수박'));
console.log(fruits.includes('스타프루츠'));

// lastIndexof 
console.clear(); 
fruits.push('레몬');
console.log(fruits);

console.log(fruits.indexOf('레몬'));
console.log(fruits.lastIndexOf('레몬'));
