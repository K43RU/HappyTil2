inserirRota('/mostrar_pet', function name(dados, resposta) {
    console.log(dados);

    if (!dados.pet) {
        return resposta({ erro: 'é necessário preencher o nome' })
    }

    if (!dados.pet) {
        return resposta({erro: 'é necessario inserir uma imagem'})

    }

    database(`INSERT INTO PET (NOME, IMG) VALUES ("${dados.pet}", "${dados.img}")`).then(result => {
        console.log('horario inserido com sucesso');
        resposta({ message: 'horario inserido com sucesso!' });
    }).catch(erro => {
        console.log('erro ao inserir horario');
        resposta({ erro: 'erro ao inserir o horario!' })
    });
})

inserirRota('/buscar_pet', function (dados, resposta) {
    console.log(dados)
    database(`SELECT * FROM PET`)
        .then(result => {
            console.log('horario buscado com sucesso');
            resposta({ list: result });
        }).catch(erro => {
            console.log('erro ao buscar horario');
            resposta({ erro: 'erro ao buscar o horario!' })
        });

});