inserirRota('/adicionarCarrinho', function name(dados, resposta) {
    console.log(dados);

    database(`INSERT INTO CARRINHO (ID_USER, ID_PROD) VALUES ("${dados.id_user}", "${dados.id_prod}")`).then(result => {
        console.log('produto inserido com sucesso');
        resposta({ message: 'produto inserido com sucesso!' });
    }).catch(erro => {
        console.log('erro ao inserir produto');
        resposta({ erro: 'erro ao inserir o produto!' })
    });
})

inserirRota('/removerCarrinho', function name(dados, resposta) {
    console.log(dados);

    database(`DELETE FROM CARRINHO WHERE ID == "${dados.ID}"`).then(result => {
        console.log('produto REMOVIDO com sucesso');
        resposta({ message: 'produto REMOVIDO com sucesso!' });
    }).catch(erro => {
        console.log('erro ao REMOVER produto');
        resposta({ erro: 'erro ao REMOVER o produto!' })
    });
})

inserirRota('/buscarCarrinho', function (dados, resposta) {
    console.log(dados)
    database(`SELECT CARRINHO.ID, CARRINHO.ID_USER, CARRINHO.ID_PROD, PROD_APROVAR.NOME, PROD_APROVAR.IMG, PROD_APROVAR.PRECO FROM CARRINHO
    LEFT JOIN PROD_APROVAR
    ON CARRINHO.ID_PROD == PROD_APROVAR.ID
    WHERE CARRINHO.ID_USER == "${dados.idUser}"
    `
    )
        .then(result => {
            console.log('produto buscado com sucesso');
            resposta({ list: result });
        }).catch(erro => {
            console.log('erro ao buscar produto');
            resposta({ erro: 'erro ao buscar o produto!' })
        });

});