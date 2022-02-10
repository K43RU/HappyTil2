database(`CREATE TABLE IF NOT EXISTS TESTE (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    NUMERO int
    )`).then(result => {
    console.log('tabela criada')
}).catch(erro => {
    ({ resposta: erro });
    console.log('falha');
});

database(`CREATE TABLE IF NOT EXISTS USER (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    EMAIL varchar(30),
    PASSWORD varchar(30)
    )`).then(result => {
    console.log('tabela criada')
}).catch(erro => {
    ({ resposta: erro });
    console.log('falha');
});