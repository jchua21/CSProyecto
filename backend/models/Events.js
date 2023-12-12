import mongoose, { Schema, model } from "mongoose";

const eventSchema = new Schema(
  {
    nombre: {
      type: Schema.Types.String,
      required: true,
    },
    descripcion: {
      type: Schema.Types.String,
      required: true,
    },
    //Moongose will replace this field
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    datetime: {
      type: Schema.Types.String,
      required: true,
    },
    aforo: {
      type: Schema.Types.Number,
      required: true,
    },
    urlImage: {
      type: Schema.Types.String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Event = model("Event", eventSchema);

export default Event;
