let numeros: number[] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91];
let par: number[] = [];
let impar: number[] = [];

for(const n of numeros){
    if(n % 2 == 0)
        par.push(n);
    else
        impar.push(n);
}

console.log(par);

let maior = 0;
for(let i = 0; i < par.length; i++){
    if(i > maior){
        par[par.indexOf(par[i])] = par[i];
        par.unshift(par[i]);
        par.pop();
    }
}

console.log(par);