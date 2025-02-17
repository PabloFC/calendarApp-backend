/*

    Events Routes
    /api/events

 */

const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const router = Router();

// Todas tienen que pasar por la validación del JWT
router.use(validarJWT);

//Obtener eventos
router.get("/", getEventos);

//crear evento
router.post("/", crearEvento);

//actualizar evento
router.put("/:id", actualizarEvento);

//eliminar evento
router.delete("/:id", eliminarEvento);

module.exports = router;
