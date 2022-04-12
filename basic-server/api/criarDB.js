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
    PASSWORD varchar(30),
    IMG varchar(99999999)
    )`).then(result => {
    console.log('tabela criada')
}).catch(erro => {
    ({ resposta: erro });
    console.log('falha');
});

database(`CREATE TABLE IF NOT EXISTS HORARIO (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    PET varchar(30),
    ESPECIE varchar(30),
    DATA DATE,
    HORA TIME
    )`).then(result => {
    console.log('tabela criada')
}).catch(erro => {
    ({ resposta: erro });
    console.log('falha');
});

database(`CREATE TABLE IF NOT EXISTS PRODUTOS (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    PRECO varchar(30),
    IMG varchar(9999999999)
    )`).then(result => {
    console.log('tabela criada')
}).catch(erro => {
    ({ resposta: erro });
    console.log('falha');
});

database(`CREATE TABLE IF NOT EXISTS PROD_APROVAR (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    PRECO int,
    IMG varchar(9999999999),
    ID_USER INTEGER,
    FOREIGN KEY (ID_USER) REFERENCES USER (ID)
    )`).then(result => {
    console.log('tabela criada')
}).catch(erro => {
    ({ resposta: erro });
    console.log('falha');
});

database(`CREATE TABLE IF NOT EXISTS CARRINHO (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    ID_USER INTEGER,
    ID_PROD INTEGER,
    FOREIGN KEY (ID_PROD) REFERENCES PROD_APROVAR (ID),
    FOREIGN KEY (ID_USER) REFERENCES USER (ID)
    )`).then(result => {
    console.log('tabela criada')
}).catch(erro => {
    ({ resposta: erro });
    console.log('falha');
});

database(`CREATE TABLE IF NOT EXISTS PET (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME VARCHAR(45) NOT NULL,
    IMG VARCHAR(9999999999)
    )`).then(result => {
    console.log('tabela criada')
}).catch(erro => {
    ({ resposta: erro });
    console.log('falha');
});

