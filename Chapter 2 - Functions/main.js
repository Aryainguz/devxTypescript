// Two ways to declare a function in typescript with return type 
// 1st way
var add = function (n, m) {
    return Number(n + m);
};
console.log(add(1, 2));
// 2nd way
var sub = function (a, b) {
    return Number(a - b);
};
console.log(sub(1, 2));
// use number in capital letter when you want to use it as a type and in small letter when you want to use it as a value
