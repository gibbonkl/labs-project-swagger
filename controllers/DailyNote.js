'use strict';

var utils = require('../utils/writer.js');
var DailyNote = require('../service/DailyNoteService');

module.exports.dailyOperacaoPOST = function dailyOperacaoPOST (req, res, next) {
  var operacao = req.swagger.params['operacao'].value;
  var body = req.swagger.params['body'].value;
  DailyNote.dailyOperacaoPOST(operacao,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
