// 3 ways to use type assertion
//1.  let btn=document.querySelector('button')!;
// 2. let btn = document.querySelector('button') as HTMLButtonElement
// 3. let btn = <HTMLButtonElement>document.querySelector('button')
// let btn:HTMLButtonElement = document.querySelector('button'); // this will give error 
var form = document.querySelector('form');
var btn = document.querySelector('button');
form.onsubmit = function (e) {
    e.preventDefault();
    var val = document.querySelector('input');
    var answer = Number(val.value);
    var h3 = document.createElement('h3');
    h3.textContent = "Square root of ".concat(answer, " is ").concat(Math.sqrt(answer));
    document.body.append(h3);
};
