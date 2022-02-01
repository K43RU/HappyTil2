const { Database } = require("sqlite3");

inserirRota('/buscar_usuario', function (dados, resposta){
    console.log(dados);
    resposta({ok: 'requisição efetuada com sucesso!'});
});

inserirRota('/criar_usuario', function name(dados, resposta){
    console.log(dados);

    if(!dados.nome){
        return resposta({erro: 'é necessário preencher o nome'})
    }

    if(!dados.nome){
        return resposta({erro: 'é necessário preencher o nickname'})
    }

    database(`INSERT INTO USER (NOME, NICKNAME) VALUES ("${dados.nome}", "${dados.nickname}")`).then(result => {
        console.log('usuario inserido com sucesso');
        resposta({message: 'usuario inserido com sucesso!'});
    }).catch(erro => {
        console.log('erro ao inserir usuário');
        resposta({erro: 'erro ao inserir o usuario!'})
    });
})