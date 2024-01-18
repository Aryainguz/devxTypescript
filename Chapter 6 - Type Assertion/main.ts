// 3 ways to use type assertion

//1.  let btn=document.querySelector('button')!;

// 2. let btn = document.querySelector('button') as HTMLButtonElement

// 3. let btn = <HTMLButtonElement>document.querySelector('button')

// let btn:HTMLButtonElement = document.querySelector('button'); // this will give error 

let form = document.querySelector('form') as HTMLFormElement;
let btn = document.querySelector('button') as HTMLButtonElement;

form.onsubmit = (e:SubmitEvent) => {
    e.preventDefault();
    let val = document.querySelector('input') as HTMLInputElement;
    let answer = Number(val.value) 
    let h3 = document.createElement('h3') as HTMLHeadingElement;
    h3.textContent = `Square root of ${answer} is ${Math.sqrt(answer)}`;
    document.body.append(h3);
}