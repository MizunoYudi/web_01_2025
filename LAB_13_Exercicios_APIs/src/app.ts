import express , { Request , Response } from "express"
import { Jogador } from "./jogador"

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

const jogadores: Jogador[] = [];

function helloWorld(req: Request, res: Response): void {
    res.status(200).send('Teste');
}

function filtrarPorId(req: Request, res: Response): void {
    try {
        let id = req.params.id
        for(let i = 0; i < jogadores.length; i++){
            if(jogadores[i].id == parseInt(id)){ 
                res.status(200).json(jogadores[i])
            }
        }
        res.status(404).send("Jogador não encontrado");
    } catch (e: unknown) {
        res.status(400).send({Message:" Necessário informar o ID"})
    }
}

function novoJogador(req: Request, res: Response): void {
    try {
        let data: any = req.body;

        if(!data.id || !data.nome || !data.cpf || !data.email || !data.telefone || !data.posicao){
            throw new Error("Falta informações.");
        }

        const j = new Jogador(data.id, data.nome, data.cpf, data.email, data.telefone, data.posicao);
        jogadores.push(j)
        res.status(200).json(j)
    } catch (e: unknown) {
        res.status(400).json({Message:(e as Error).message})
    }
}

app.get('/api/jogadores/:id', filtrarPorId);
app.post('/api/jogadores', novoJogador);



app.listen(PORT, () => console.log(`API em execução na URL: http://localhost:${PORT}`));