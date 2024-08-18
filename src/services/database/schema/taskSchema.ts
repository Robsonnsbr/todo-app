'use server';
import { Schema, model, models, Document } from 'mongoose';
import { ITaskPropsOmitID, Color } from 'src/types/taskType';

type ITaskPropsDocument = ITaskPropsOmitID & Document;

const taskSchema = new Schema<ITaskPropsDocument>(
  {
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      enum: Object.values(Color),
      default: Color.WhiteSnow
    }
  },
  {
    timestamps: true
  }
);

const TaskModel = models.task || model<ITaskPropsOmitID>('task', taskSchema);

export default TaskModel;
