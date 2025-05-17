"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jogador_1 = require("./jogador");
const app = (0, express_1.default)();
const PORT = process.env.PORT ?? 3000;
app.use(express_1.default.json());
const jogadores = [];
function helloWorld(req, res) {
    res.status(200).send('Teste');
}
function listarJogadores(req, res) {
    let texto = '';
    res.status(200).send(texto);
}
function filtrarPorId(req, res) {
    try {
        let id = req.params.id;
        for (let i = 0; i < jogadores.length; i++) {
            if (jogadores[i].id == parseInt(id)) {
                res.status(200).json(jogadores[i]);
            }
        }
        res.status(404).send("Jogador não encontrado");
    }
    catch (e) {
        res.status(400).send({ Message: " Necessário informar o ID" });
    }
}
function novoJogador(req, res) {
    try {
        let data = req.body;
        if (!data.id || !data.nome || !data.cpf || !data.email || !data.telefone || !data.posicao) {
            throw new Error("Falta informações.");
        }
        const j = new jogador_1.Jogador(data.id, data.nome, data.cpf, data.email, data.telefone, data.posicao);
        jogadores.push(j);
        res.status(200).json(j);
    }
    catch (e) {
        res.status(400).json({ Message: e.message });
    }
}
app.get('/api/jogadores/:id', filtrarPorId);
app.post('/api/jogadores', novoJogador);
app.listen(PORT, () => console.log(`API em execução na URL: http://localhost:${PORT}`));
