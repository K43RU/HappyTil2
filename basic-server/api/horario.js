inserirRota('/marcar_horario', function name(dados, resposta) {
    console.log(dados);

    if (!dados.pet) {
        return resposta({ erro: 'é necessário preencher o nome' })
    }

    if (!dados.especie) {
        return resposta({ erro: 'é necessário preencher a especie' })
    }

    if (!dados.data) {
        return resposta({ erro: 'é necessário informar a data' })
    }

    if (!dados.hora) {
        return resposta({ erro: 'é necessário informar a hora' })
    }

    database(`INSERT INTO HORARIO (PET, ESPECIE, DATA, HORA) VALUES ("${dados.pet}", "${dados.especie}", "${dados.data}", "${dados.hora}")`).then(result => {
        console.log('horario inserido com sucesso');
        resposta({ message: 'horario inserido com sucesso!' });
    }).catch(erro => {
        console.log('erro ao inserir horario');
        resposta({ erro: 'erro ao inserir o horario!' })
    });
})

inserirRota('/buscar_horario', function (dados, resposta) {
    console.log(dados)
    database(`SELECT * FROM HORARIO`)
        .then(result => {
            console.log('horario buscado com sucesso');
            resposta({ list: result });
        }).catch(erro => {
            console.log('erro ao buscar horario');
            resposta({ erro: 'erro ao buscar o horario!' })
        });

});

// fetch('/api/buscar_horario',
//     {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
// ).then(function (result){
//     return result.json();
// }).then(function (dados){
//     console.log(dados);
// }).catch(function(erro){
//     console.log(erro)
// })