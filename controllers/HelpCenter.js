'use strict';

var utils = require('../utils/writer.js');
var HelpCenter = require('../service/HelpCenterService');

module.exports.helpcenterAtividadePaginaGET = function helpcenterAtividadePaginaGET (req, res, next) {
  var pagina = req.swagger.params['pagina'].value;
  HelpCenter.helpcenterAtividadePaginaGET(pagina)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.helpcenterQueryDadosPaginaGET = function helpcenterQueryDadosPaginaGET (req, res, next) {
  var dados = req.swagger.params['dados'].value;
  var pagina = req.swagger.params['pagina'].value;
  HelpCenter.helpcenterQueryDadosPaginaGET(dados,pagina)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
