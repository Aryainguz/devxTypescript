// Typescript is a dev tool and all typescript code is converted to js in production
// Typescript is a superset of javascript
// Typescript is a strongly typed language
// Typescript is a compiled language
// Typescript is an object oriented language\
// Typescript is a statically typed language
// Typescript is a transpiled language
// Typescript is a typed superset of javascript that compiles to plain javascript


// Two ways to declare variables in typescript with specifying types

// 1
let a = <number>1;

//2
let b: number = 1;

// You can't change the type of a variable once it is declared
// a = "hello"; // This will throw an error
// You can also declare variables with the any type

let c: any = 1;

c = "hello"; // This is allowed
