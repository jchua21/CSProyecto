import Enrollments from "../models/Enrollments.js";
import { isValidObjectId } from "mongoose";

const obtenerInscripciones = async (req, res) => {
  const inscripciones = await Enrollments.find({ user: req.user._id }).populate(
    {
      path: "event",
      populate: {
        path: "user",
      },
    }
  );

  return res.json(inscripciones);
};

const eliminarInscripcion = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    const error = new Error("Acción no Válida");
    return res.status(400).json({ msg: error.message });
  }

  const enrollment = await Enrollments.findOne({
    user: req.user._id,
    event: id,
  });

  if (!enrollment) {
    return res.status(404).json({ msg: "No Encontrado" });
  }

  try {
    console.log(enrollment);

    await enrollment.deleteOne();
    return res.json({ msg: "Inscripcion Eliminada" });
  } catch (error) {
    console.log(error);
  }
};

const inscribir = async (req, res) => {
  console.log("Inscirbiendo");

  try {
    const inscripcion = new Enrollments({
      user: req.user._id,
      event: req.body.eventId,
    });

    await inscripcion.save();

    return res.json(inscripcion);
  } catch (error) {
    console.log(error);
  }
};

export { obtenerInscripciones, eliminarInscripcion, inscribir };
