let numeros3a5: number[] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91, 105, 120, 33, 47, 52];
let multiplos3: number[] = [];
let multiplos5: number[] = [];
let outros: number[] = [];

for(const n of numeros3a5){
    if(n % 3 == 0)
        multiplos3.push(n);
    else if(n % 5 == 0)
        multiplos5.push(n);
    else
        outros.push(n);
}

console.log(multiplos3, multiplos5, outros);