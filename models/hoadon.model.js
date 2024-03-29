var mongoose = require('mongoose')

var hoadonSchema = new mongoose.Schema({
  message:String,
  name:[String],
  nameUser: String,
  tonggia: Number,
  status: Number | 0,
  phone: String,
  diachi: String,
  soluong:[Number],
  idSP:[String],
  price:[String]
});

var Hoadon = mongoose.model('Hoadon', hoadonSchema , 'hoadon');

module.exports = Hoadon;