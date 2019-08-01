'use strict';


/**
 * Recebe uma lista de Daily Notes
 * Está rota envia uma lista de dailies de acordo com a operação escolhida - user ou data
 *
 * operacao String {operacao} = user,  para buscar por username ou {operacao} = data, para buscar por data.
 * body Body No body da requisição deve ser enviado o username ou a data que deseja filtrar
 * returns List
 **/
exports.dailyOperacaoPOST = function(operacao,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "createdAt" : "2019-07-11T11:38:22.014Z",
  "ativo" : true,
  "corpo" : {
    "ontem" : "Review, retro e planning da sprint 02",
    "hoje" : "seguir a planning e iniciar a pesquisa sobre chatbots",
    "impedimento" : "nenhum"
  },
  "data" : "11/7/2019",
  "__v" : 0,
  "imagem" : "4d8729ed-aecb-4975-ba6d-1662b008a56b.jpg",
  "usuario" : "borbalbano",
  "_id" : "5d271fad0f01b10033eeeb61",
  "permissao" : true,
  "updatedAt" : "2019-07-11T11:38:22.014Z"
}, {
  "createdAt" : "2019-07-11T11:38:22.014Z",
  "ativo" : true,
  "corpo" : {
    "ontem" : "Review, retro e planning da sprint 02",
    "hoje" : "seguir a planning e iniciar a pesquisa sobre chatbots",
    "impedimento" : "nenhum"
  },
  "data" : "11/7/2019",
  "__v" : 0,
  "imagem" : "4d8729ed-aecb-4975-ba6d-1662b008a56b.jpg",
  "usuario" : "borbalbano",
  "_id" : "5d271fad0f01b10033eeeb61",
  "permissao" : true,
  "updatedAt" : "2019-07-11T11:38:22.014Z"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

