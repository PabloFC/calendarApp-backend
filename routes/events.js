/*

    Events Routes
    /api/events

 */

const { Router } = require("express");
const { check } = require("express-validator");

const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const router = Router();

// Todas tienen que pasar por la validación del JWT
// en vez de poner el middleware en cada uno de los endpoints
router.use(validarJWT);

//Obtener eventos
router.get("/", getEventos);

//crear evento
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalización es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

//actualizar evento
router.put("/:id", actualizarEvento);

//eliminar evento
router.delete("/:id", eliminarEvento);

module.exports = router;
