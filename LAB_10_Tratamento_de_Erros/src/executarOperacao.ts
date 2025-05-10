function executarOperacao(){
    try {
        throw new Error("Erro Genérico")
    } catch (erro){
        console.log("Erro: ", (erro as Error).message);
    }
}

executarOperacao();