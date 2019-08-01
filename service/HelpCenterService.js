'use strict';


/**
 * Busca lista de Postagens do HelpCenter
 * Está rota retorna uma lista com as 5 últimas postagens a serem editadas juntamente com a quantidade de páginas
 *
 * pagina Integer número da página
 * returns ListaHelpCenter
 **/
exports.helpcenterAtividadePaginaGET = function(pagina) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 1,
  "postagens" : [ {
    "numeroLikes" : 5,
    "ativo" : true,
    "corpo" : "<p>texto aleatorio no corpo da postagem</p>",
    "data" : "11/7/2019",
    "imagem" : "6485b3c5-69af-45b6-8080-3b2b96915a15.jpg",
    "titulo" : "titulo da postagem",
    "updateAt" : "2019-07-30T13:11:32.167Z",
    "permissao" : true,
    "interacoes" : 6,
    "createAt" : "2019-07-30T13:11:32.167Z",
    "tags" : [ "Alura", "Alura" ],
    "resolvido" : true,
    "__v" : 0,
    "numeroComentarios" : 2,
    "_id" : "5d40420402fcf20034a77ee6",
    "comentarios" : [ "comentarios", "comentarios" ],
    "likes" : [ "likes", "likes" ],
    "username" : "borbalbano"
  }, {
    "numeroLikes" : 5,
    "ativo" : true,
    "corpo" : "<p>texto aleatorio no corpo da postagem</p>",
    "data" : "11/7/2019",
    "imagem" : "6485b3c5-69af-45b6-8080-3b2b96915a15.jpg",
    "titulo" : "titulo da postagem",
    "updateAt" : "2019-07-30T13:11:32.167Z",
    "permissao" : true,
    "interacoes" : 6,
    "createAt" : "2019-07-30T13:11:32.167Z",
    "tags" : [ "Alura", "Alura" ],
    "resolvido" : true,
    "__v" : 0,
    "numeroComentarios" : 2,
    "_id" : "5d40420402fcf20034a77ee6",
    "comentarios" : [ "comentarios", "comentarios" ],
    "likes" : [ "likes", "likes" ],
    "username" : "borbalbano"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Busca lista de Postagens do HelpCenter
 * Está rota retorna uma lista com as 5 postagens e a quantidade de páginas
 *
 * dados String dados a serem pesquisados no titulo ou no corpo da postagem
 * pagina Integer número da página
 * returns ListaHelpCenter
 **/
exports.helpcenterQueryDadosPaginaGET = function(dados,pagina) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 1,
  "postagens" : [ {
    "numeroLikes" : 5,
    "ativo" : true,
    "corpo" : "<p>texto aleatorio no corpo da postagem</p>",
    "data" : "11/7/2019",
    "imagem" : "6485b3c5-69af-45b6-8080-3b2b96915a15.jpg",
    "titulo" : "titulo da postagem",
    "updateAt" : "2019-07-30T13:11:32.167Z",
    "permissao" : true,
    "interacoes" : 6,
    "createAt" : "2019-07-30T13:11:32.167Z",
    "tags" : [ "Alura", "Alura" ],
    "resolvido" : true,
    "__v" : 0,
    "numeroComentarios" : 2,
    "_id" : "5d40420402fcf20034a77ee6",
    "comentarios" : [ "comentarios", "comentarios" ],
    "likes" : [ "likes", "likes" ],
    "username" : "borbalbano"
  }, {
    "numeroLikes" : 5,
    "ativo" : true,
    "corpo" : "<p>texto aleatorio no corpo da postagem</p>",
    "data" : "11/7/2019",
    "imagem" : "6485b3c5-69af-45b6-8080-3b2b96915a15.jpg",
    "titulo" : "titulo da postagem",
    "updateAt" : "2019-07-30T13:11:32.167Z",
    "permissao" : true,
    "interacoes" : 6,
    "createAt" : "2019-07-30T13:11:32.167Z",
    "tags" : [ "Alura", "Alura" ],
    "resolvido" : true,
    "__v" : 0,
    "numeroComentarios" : 2,
    "_id" : "5d40420402fcf20034a77ee6",
    "comentarios" : [ "comentarios", "comentarios" ],
    "likes" : [ "likes", "likes" ],
    "username" : "borbalbano"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

