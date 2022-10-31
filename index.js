console.log("Hola Mundo");

/*
var-let-const
Metodos de Arrays Map/ForEach/Find/Filter
Spread
Operador Ternario
Desestructuracion
Arrow Function
Promesas/asincronismo
*/

var a = 1;
console.log(a);
var a = 2;
console.log(a);

if(true){
    let b = 1;
    console.log(b);
}

//console.log(b);

const c = {x:1};

c.x = 2;

console.log(c);

const arr = [1,2,3,4,5,6]

let copiaForEach = []

arr.forEach((number)=>{
    copiaForEach.push(number)
})

console.log(arr);
console.log(copiaForEach);

const copiaMap = arr.map((number)=>{
    return number;
})
console.log(copiaMap);

const arr2 = [7,8,9]

const copiaSpread = [...arr]
console.log(copiaSpread);

let copiaDirecta = arr;
copiaDirecta[0] = 5
console.log(copiaDirecta);
console.log(arr);

let x = 1;
let y = a;
y = 2;
console.log(x);
console.log(y);