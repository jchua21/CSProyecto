import User from "../models/User.js";
import generarJWT from "../utils/generarJWT.js";

const autenticar = async (req, res) => {
  //Comprobar si existe
  console.log("Logeandose....");
  const { email, password } = req.body;
  const usuario = await User.findOne({ email });

  if (!usuario) {
    const error = new Error("Usuario no Existe");
    return res.status(403).json({ msg: error.message });
  }

  //Revisar password
  if (!(await usuario.comprobarPassword(password))) {
    const error = new Error("Tu Password es incorrecto");
    return res.status(403).json({ msg: error.message });
  }

  //Autenticar
  res.json({
    token: generarJWT(usuario.id),
  });
};

const registrar = async (req, res) => {
  //Revisar si un usuario ya esta regsitrado
  const { email, nombre, password } = req.body;

  const existeUsuario = await User.findOne({ email });

  if (existeUsuario) {
    const error = new Error("El Usuario ya esta registrado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    //Guardar un nuevp User
    const user = new User({
      nombre,
      email,
      password,
    });
    const userGuardado = await user.save();

    res.json(userGuardado);
  } catch (error) {
    console.log(error);
  }
};

const perfil = async (req, res) => {
  const { user } = req;
  return res.json(user);
};

export { autenticar, registrar, perfil };
