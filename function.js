// Function Declaration Start
function appleOrangeJuice(){
    console.log('Make This Juice');
}
appleOrangeJuice();

let age = 21;
let name = ('Mejbah Morsalin');

console.log(`I am ${age} years Old`);
console.log(`I am ${name} and, I am ${age} years Old`);

function mangoLimeJuice(mangos , limes){
    const mangospieces = pieces(mangos);
    const limespieces = pieces(limes);
    console.log(mangospieces, limespieces)
   const juice = `Make Juice with ${mangos} Mangos and add ${limes} Limes`;
   return juice;
}
const juice = mangoLimeJuice(2, 3);
console.log(juice)

function pieces(cut) {
    const pieces = cut * 4;
    return pieces;
}

function added(num1 , num2){
    const total = num1 + num2;
    return total;
}
const sum = added(506 , 325);
console.log(sum)
// Function Declaration Done