const mongoose = require("mongoose");

const TrabajadoresSchema = mongoose.Schema({
  Contraseña: {
    type: String    
  },
  Nombres: {
    type: String,
    required: true
  },
  Apellido_Paterno: {
    type: String
  },
  Apellido_Materno: {
    type: String
  },
  Foto: {
    type: String
  },
  Domicilio: {
    type: String
  },
  Email: {
    type: String
  },
  Telefono: {
    type: Number
  },
  Dia_Entrada: {
    type: Date
  },
  Rol: {
    type: String
  }
});

module.exports = mongoose.model("Trabajador", TrabajadoresSchema);