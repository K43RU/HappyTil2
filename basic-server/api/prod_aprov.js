inserirRota('/cadastroProd', function name(dados, resposta) {
    console.log(dados);

    if (!dados.nome) {
        return resposta({ erro: 'é necessário preencher o nome' })
    }

    if (!dados.preco) {
        return resposta({ erro: 'é necessário preencher o preco' })
    }

<<<<<<< HEAD
    database(`INSERT INTO PROD_APROVAR (NOME, PRECO, IMG) VALUES ("${dados.nome}", "${dados.preco}", "${dados.img}")`).then(result => {
=======
    database(`INSERT INTO PROD_APROVAR (NOME, PRECO) VALUES ("${dados.nome}", "${dados.preco}"`).then(result => {
>>>>>>> deb0ed607272f7d5d0f4f3076fba43e87161a439
        console.log('produto inserido com sucesso');
        resposta({ message: 'produto inserido com sucesso!' });
    }).catch(erro => {
        console.log('erro ao inserir produto');
        resposta({ erro: 'erro ao inserir o produto!' })
    });
})

inserirRota('/buscar_prod', function (dados, resposta) {
    console.log(dados)
    database(`SELECT * FROM PROD_APROVAR`)
        .then(result => {
            console.log('produto buscado com sucesso');
            resposta({ list: result });
        }).catch(erro => {
            console.log('erro ao buscar produto');
            resposta({ erro: 'erro ao buscar o produto!' })
        });
<<<<<<< HEAD

});

inserirRota('/buscar_prod', function (dados, resposta) {
    console.log(dados)
    database(`SELECT * FROM PROD_APROVAR`)
        .then(result => {
            console.log('usuario buscado com sucesso');
            resposta({ list: result });
        }).catch(erro => {
            console.log('erro ao buscar usuário');
            resposta({ erro: 'erro ao buscar o usuário!' })
        });

=======
>>>>>>> deb0ed607272f7d5d0f4f3076fba43e87161a439
});