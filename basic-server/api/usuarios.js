const { Database } = require("sqlite3");

inserirRota('/buscar_usuario', function (dados, resposta) {
    console.log(dados)
    database(`SELECT * FROM USER`)
        .then(result => {
            console.log('usuario buscado com sucesso');
            resposta({ list: result });
        }).catch(erro => {
            console.log('erro ao buscar usuário');
            resposta({ erro: 'erro ao buscar o usuário!' })
        });

});

inserirRota('/login', function (dados, resposta) {
    console.log(dados)
    database(`SELECT * FROM USER WHERE NICKNAME = "${dados.nome}" AND PASSWORD = "${dados.nickname}" LIMIT 1`).then(result => {
        console.log('usuario buscado com sucesso');
        resposta({ list: result });
    }).catch(erro => {
        console.log('erro ao buscar usuário');
        resposta({ erro: 'erro ao buscar o usuário!' })
    });

});

inserirRota('/criar_usuario', function name(dados, resposta) {
    console.log(dados);

    if (!dados.nome) {
        return resposta({ erro: 'é necessário preencher o nome' })
    }

    if (!dados.nome) {
        return resposta({ erro: 'é necessário preencher o nickname' })
    }

    database(`INSERT INTO USER (NOME, NICKNAME) VALUES ("${dados.nome}", "${dados.nickname}")`).then(result => {
        console.log('usuario inserido com sucesso');
        resposta({ message: 'usuario inserido com sucesso!' });
    }).catch(erro => {
        console.log('erro ao inserir usuário');
        resposta({ erro: 'erro ao inserir o usuario!' })
    });
})

// fetch('/api/buscar_usuario',
//     {
//         method: 'POST',
//         body: JSON.stringify(
//             {
//                 nome: 'Bruno', nickname: 'BRUNO', idade: 23
//             }
//         ),
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