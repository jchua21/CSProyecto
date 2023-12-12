import mongoose, { Schema, model } from "mongoose";

const enrollmentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event",
  },
});

const Enrollment = model("Enrollment", enrollmentSchema);

export default Enrollment;
