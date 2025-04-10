import { Aluno } from "./aluno";

const aluno1 = new Aluno("Pablo", "BT303030", 20);
aluno1.imprimeAluno();

aluno1.nome = "Carlos";

aluno1.imprimeAluno();