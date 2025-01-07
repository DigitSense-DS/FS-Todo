import mongoose, { Schema, Model } from "mongoose";

type SchemaTypes = ITodo & Document;

export const TodoSchema = new Schema<SchemaTypes>(
  {
    name: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true, getters: true },
  }
);


const Todo: Model<ITodo> =
mongoose.models.Todo || mongoose.model<ITodo>("Todo", TodoSchema);

export default Todo;
