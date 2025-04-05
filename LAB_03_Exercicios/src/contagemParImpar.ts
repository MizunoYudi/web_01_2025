let numeros: number[] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91];
let par: number[] = [];
let impar: number[] = [];

for(const n of numeros){
    if(n % 2 == 0)
        par.push(n);
    else
        impar.push(n);
}

console.log(par, impar);