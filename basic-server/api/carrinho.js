inserirRota('/adicionarCarrinho', function name(dados, resposta) {
    console.log(dados);

    database(`INSERT INTO CARRINHO (NOME, PRECO, IMG) VALUES ("${dados.nome}", "${dados.preco}")`).then(result => {
        console.log('produto inserido com sucesso');
        resposta({ message: 'produto inserido com sucesso!' });
    }).catch(erro => {
        console.log('erro ao inserir produto');
        resposta({ erro: 'erro ao inserir o produto!' })
    });
})

inserirRota('/buscarCarrinho', function (dados, resposta) {
    console.log(dados)
    database(`SELECT * FROM CARRINHO`)
        .then(result => {
            console.log('produto buscado com sucesso');
            resposta({ list: result });
        }).catch(erro => {
            console.log('erro ao buscar produto');
            resposta({ erro: 'erro ao buscar o produto!' })
        });

});