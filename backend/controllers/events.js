import Event from "../models/Events.js";
import { isValidObjectId } from "mongoose";

const obtenerEventos = async (req, res) => {
  const eventos = await Event.find({}).populate("user");

  res.json(eventos);
};

const obtenerEventosDoctores = async (req, res) => {
  const eventos = await Event.find({ user: req.user._id });

  res.json(eventos);
};

const crearEvento = async (req, res) => {
  const evento = new Event(req.body);
  evento.user = req.user._id;

  try {
    const eventoCreado = await evento.save();
    res.json(eventoCreado);
  } catch (error) {
    return req.json();
  }
};

const obtenerEvento = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    const error = new Error("Acción no Válida");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const evento = await Event.findById(id);

    if (!evento) {
      return res.status(404).json({ msg: "No Encontrado" });
    }

    //Valida que el evento consultado sea del usuario correcto
    //req.user.id -> lo conveirte a string
    if (evento.user.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Accion No Valida" });
    }

    return res.json(evento);
  } catch (error) {
    return res.status(404).json({ msg: "Algo salio mal" });
  }
};

const actualizarEvento = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    const error = new Error("Acción no Válida");
    return res.status(400).json({ msg: error.message });
  }

  const evento = await Event.findById(id);

  if (!evento) {
    return res.status(404).json({ msg: "No Encontrado" });
  }

  //Valida que el evento consultado sea del usuario correcto
  //req.user.id -> lo conveirte a string
  if (evento.user.toString() !== req.user.id) {
    return res.status(403).json({ msg: "Accion No Valida" });
  }

  Object.entries(req.body).forEach(([key, value]) => {
    evento[key] = value;
  });

  try {
    const eventoActualizado = await evento.save();
    return res.json(eventoActualizado);
  } catch (error) {
    console.log(error);
  }

  return res.json(evento);
};

const eliminarEvento = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    const error = new Error("Acción no Válida");
    return res.status(400).json({ msg: error.message });
  }

  const evento = await Event.findById(id);

  if (!evento) {
    return res.status(404).json({ msg: "No Encontrado" });
  }

  //Valida que el evento consultado sea del usuario correcto
  //req.user.id -> lo conveirte a string
  if (evento.user.toString() !== req.user.id) {
    return res.status(403).json({ msg: "Accion No Valida" });
  }

  try {
    //ELIMINAR
    await evento.deleteOne();
    res.json({ msg: "Paciente Eliminado" });
  } catch (error) {
    console.log(error);
  }
};

export {
  obtenerEventos,
  obtenerEventosDoctores,
  crearEvento,
  eliminarEvento,
  obtenerEvento,
  actualizarEvento,
};
