inserirRota('/cadastroProd', function name(dados, resposta) {
    console.log(dados);

    if (!dados.nome) {
        return resposta({ erro: 'é necessário preencher o nome' })
    }

    if (!dados.preco) {
        return resposta({ erro: 'é necessário preencher o preco' })
    }

    database(`INSERT INTO PROD_APROVAR (NOME, PRECO, IMG, ID_USER) VALUES ("${dados.nome}", "${dados.preco}", "${dados.img}", "${dados.id}")`).then(result => {
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

});

inserirRota('/buscar_produtao', function (dados, resposta) {
    console.log(dados)
    database(`SELECT * FROM PROD_APROVAR WHERE ID == "${dados.id}"`)
        .then(result => {
            console.log('produto buscado com sucesso');
            resposta({ list: result });
        }).catch(erro => {
            console.log('erro ao buscar produto');
            resposta({ erro: 'erro ao buscar o produto!' })
        });

});

inserirRota('/buscar_produt', function (dados, resposta) {
    console.log(dados)
    database(`SELECT * FROM PROD_APROVAR WHERE ID != "${dados.id}"`)
        .then(result => {
            console.log('produto buscado com sucesso');
            resposta({ list: result });
        }).catch(erro => {
            console.log('erro ao buscar produto');
            resposta({ erro: 'erro ao buscar o produto!' })
        });

});

inserirRota('/pesquisar', function (dados, resposta) {
    console.log(dados)
    database(`SELECT * FROM PROD_APROVAR WHERE NOME LIKE "%${dados.nome}%" `)
        .then(result => {
            console.log('produto buscado com sucesso');
            resposta({ list: result });

        }).catch(erro => {
            console.log('erro ao buscar produto');
            resposta({ erro: 'erro ao buscar o produto!' })
        });

});

inserirRota('/removerProduto', function name(dados, resposta) {
    console.log(dados);

    database(`DELETE FROM PROD_APROVAR WHERE ID == "${dados.ID}"`).then(result => {
        console.log('produto REMOVIDO com sucesso');
        resposta({ message: 'produto REMOVIDO com sucesso!' });
    }).catch(erro => {
        console.log('erro ao REMOVER produto');
        resposta({ erro: 'erro ao REMOVER o produto!' })
    });
})