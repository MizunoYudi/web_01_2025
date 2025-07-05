"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarComandoSQL = executarComandoSQL;
const mysql2_1 = __importDefault(require("mysql2"));
const dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'papelmache123',
    database: 'vendas'
};
const mysqlConnection = mysql2_1.default.createConnection(dbConfig);
mysqlConnection.connect((err) => {
    if (err) {
        console.log('Erro ao conectar ao banco de dados: ', err);
        throw err;
    }
    console.log('Conexao bem-sucedida com o banco de dados MySQL');
});
function executarComandoSQL(query, valores, callback) {
    mysqlConnection.query(query, valores, (err, resultado) => {
        if (err) {
            console.error('Erro ao executar a query.', err);
            throw err;
        }
        return callback(err, resultado);
    });
}
;
