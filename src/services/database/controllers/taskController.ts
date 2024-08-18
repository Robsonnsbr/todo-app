import { ITaskProps, ITaskPropsOmitID } from 'src/types/taskType';
import { connectDB, disconnectDB } from '../database';
import Task from '../schema/taskSchema';

// CREATE
export const saveTask = async (queryTask: ITaskProps) => {
  try {
    await connectDB();
    const newTask = new Task(queryTask);
    const result = await newTask.save();
    return result;
  } catch (error) {
    console.log('Erro ao salvar a tarefa:', error);
    throw error;
  } finally {
    // await disconnectDB();
  }
};

// READ
export const getTasks = async () => {
  try {
    await connectDB();

    const data = await Task.find().lean();

    return data;
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
  } finally {
    // await disconnectDB();
  }
};

// READ by ID
export const getTaskById = async (_id: string) => {
  try {
    await connectDB();
    return await Task.findById(_id).exec();
  } catch (error) {
    console.log('Erro ao buscar tarefa por ID:', error);
  } finally {
    // await disconnectDB();
  }
};

// UPDATE
export const updateTask = async (_id: string, updates: ITaskPropsOmitID) => {
  try {
    await connectDB();
    return await Task.findByIdAndUpdate(_id, updates, { new: true }).exec();
  } catch (error) {
    console.log('Erro ao atualizar tarefa:', error);
  } finally {
    // await disconnectDB();
  }
};

// DELETE
export const deleteTask = async (_id: string) => {
  try {
    await connectDB();
    return await Task.findByIdAndDelete(_id).exec();
  } catch (error) {
    console.log('Erro ao deletar tarefa:', error);
  } finally {
    // await disconnectDB();
  }
};

// DELETE ALL
export const deleteAllTasks = async () => {
  try {
    await connectDB();
    const result = await Task.deleteMany({});
    return {
      success: true,
      message: 'Todas as tarefas foram excluídas com sucesso.',
      deletedCount: result.deletedCount
    };
  } catch (error) {
    return { success: false, error: error };
  } finally {
    await disconnectDB();
  }
};

export const taskController = {
  saveTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  deleteAllTasks
};
