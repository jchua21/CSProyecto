import dotenv from "dotenv";
import conectarDB from "../config/db.js";
import Events from "../models/Events.js";
import Enrollment from "../models/Enrollments.js";
import { Types } from "mongoose";

async function insertEvents() {
  try {
    console.log("entrnado");

    await Events.insertMany([
      {
        nombre: "Conferencia de Salud",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m",
        user: new Types.ObjectId("6577a09a48eefc2a85795787"),
        datetime: "2024-01-01T22:08",
        urlImage:
          "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        aforo: 10,
      },
      {
        nombre: "Cirugía Programada",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m",
        user: new Types.ObjectId("6577b27eba34493fc08575e1"),
        datetime: "2024-01-01T22:08",
        urlImage:
          "https://images.unsplash.com/photo-1573496782646-e8d943a4bdd1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        aforo: 50,
      },
      {
        nombre: "Charla de Prevención",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m",
        user: new Types.ObjectId("6577a09a48eefc2a85795787"),
        datetime: "2024-01-01T22:08",
        urlImage:
          "https://images.unsplash.com/photo-1551847677-dc82d764e1eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        aforo: 20,
      },
      {
        nombre: "Consulta Médica",
        descripcion:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m",
        user: new Types.ObjectId("6577b27eba34493fc08575e1"),
        datetime: "2024-01-01T22:08",
        urlImage:
          "https://images.unsplash.com/photo-1573496782646-e8d943a4bdd1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        aforo: 40,
      },
      {
        nombre: "Conferencia de Salud",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m",
        user: new Types.ObjectId("6577a09a48eefc2a85795787"),
        datetime: "2024-01-01T22:08",
        urlImage:
          "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        aforo: 50,
      },
      {
        nombre: "Cirugía Programada",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m",
        user: new Types.ObjectId("6577b27eba34493fc08575e1"),
        datetime: "2024-01-01T22:08",
        urlImage:
          "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        aforo: 40,
      },
      {
        nombre: "Charla de Prevención",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta rin id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventoe nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m",
        user: new Types.ObjectId("6577a09a48eefc2a85795787"),
        datetime: "2024-01-01T22:08",
        urlImage:
          "https://images.unsplash.com/photo-1573496782646-e8d943a4bdd1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        aforo: 30,
      },
      {
        nombre: "JuniorFinal TEST 3",
        capacity: 20,
        datetime: "2024-01-01T22:08",
        user: new Types.ObjectId("6577b27eba34493fc08575e1"),
        urlImage:
          "http://res.cloudinary.com/deyk2we2o/image/upload/v1702265489/cft8f58b83njoqp4jvch.jpg",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore nihil fugiat iste cum velit at, qui laborum similique, doloribus dicta in id. Vel eos temporibus amet a reiciendis debitis!m Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventor",
        aforo: 20,
      },
    ]);

    console.log("====================");
    console.log("Eventos Insertados Correctamente");
    console.log("====================");
  } catch (error) {
    console.log(error);
  }
}

async function insertEnrollments() {
  try {
    await Enrollment.insertMany([
      {
        user: new Types.ObjectId("6577a09a48eefc2a85795787"),
        event: new Types.ObjectId("6577bc1e96a9ac460f3052a7"),
      },
    ]);

    console.log("====================");
    console.log("Inscripciones Insertados Correctamente");
    console.log("====================");
  } catch (error) {
    console.log(error);
  }
}

dotenv.config();
conectarDB();
await insertEnrollments();
// insertEvents();
process.exit(0);
