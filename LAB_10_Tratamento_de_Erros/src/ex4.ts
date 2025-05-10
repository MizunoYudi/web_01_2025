class Pessoa {
    constructor(
        public nome:string,
        public email: string,
        public dataNascimento: string,
    ){}

    validarNome(): void{
        try{
            if(this.nome[0] === ' ' || this.nome[this.nome.length-1] === ' '){
                throw new Error('Espacamento no inicio ou fim.');
            }
            this.nome = this.nome.toUpperCase();
        } catch(error) {
            console.log('Erro: ', (error as Error).message);
        }
    }

    validarEmail(): void{
        try{
            if(this.email.indexOf('@') < 0 || (this.email.indexOf('.com') != this.email.length - 4)){ // a.com 
                throw new Error('Formato Incorreto de Email.');
            }
        } catch(error) {
            console.log('Erro: ', (error as Error).message);
        }
    }

    validarDataNascimento(): void{
        try{
            if(!((this.dataNascimento[2] == '/' || this.dataNascimento[5] == '/ ') && this.dataNascimento.length === 10)){
                throw new Error('Formato incorreto de data.');
            }
        } catch(error){
            console.log('Erro: ', (error as Error).message);
        }
    }
}
const p1 = new Pessoa(`Carlos`, 'Carlos@gmail.com', '10/11/1012');
p1.validarNome();
p1.validarEmail();
p1.validarDataNascimento();

console.log(p1);