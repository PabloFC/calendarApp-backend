const { response } = require("express");
const { generarJWT } = require("../helpers/jwt");

const getEventos = (req, res = response) => {
  res.json({
    ok: true,
    msg: "getEventos",
  });
};

const crearEvento = (req, res = response) => {
  //verificar que tenga el evento
  // console.log(req.body);

  res.json({
    ok: true,
    msg: "crear eventos",
  });
};

const actualizarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: "actualizar eventos",
  });
};

const eliminarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: "eliminar eventos",
  });
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
