//importando o pacote
const mongoose = require ('mongoose');
//definindo o "schema"
//note a semelhança com recursos de bases relacionais
const livroSchema = mongoose.Schema ({
  id: {type: String, required: true},
  titulo: {type: String, required: true},
  autor: {type: String, required: true},
  numero_paginas: {type: String, required: true}
});

module.exports = mongoose.model('Livro', livroSchema);
