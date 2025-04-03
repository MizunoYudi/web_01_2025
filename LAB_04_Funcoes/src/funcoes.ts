// Função comum
function message(frase:string):string{
    return frase;
}
//  Lambda
const message1 = (frase: string = "Frase genérica") => frase; // Função Lamba || Arrow Function
message1("Qualquer coisa"); // Precisa ta dentro de um console log para funcionar

// Funções void
function hello():void{
    console.log("What a week");
}
//  Lambda
const hello1 = () => console.log("Olar") // Não há necessidade de definir tipos em uma função lambda, pois o seu objetivo é criar funções mais exutas
hello1();

console.log(message(`Hello world`));

hello();

// Valores Opcionais
function soma(a:number, b:number, c?:number):number { // c é opcional
    if(c){
        return a + b + c;
    } else {
        return a + b;
    }
} 
//  Lambda
const soma1 = (a:number, b:number, c?:number) => {
    if(c){
        return a + b + c;
    } else {
        return a + b;
    }
}

console.log(soma(5, 6), soma(5, 6, 7));