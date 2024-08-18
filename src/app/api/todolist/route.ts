'use server';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import { taskController } from 'src/services/database/controllers/taskController';
const {
  getTasks,
  getTaskById,
  saveTask,
  updateTask,
  deleteTask,
  deleteAllTasks
} = taskController;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('_id'); // Obtém o ID dos parâmetros da query string
    if (id) {
      // Se um ID foi passado, busca uma tarefa específica
      const task = await getTaskById(id);
      if (!task) {
        return NextResponse.json(
          { message: 'Tarefa não encontrada' },
          { status: 404 }
        );
      }
      return NextResponse.json(task);
    } else {
      // Se nenhum ID foi passado, busca todas as tarefas
      const tasks = await getTasks();
      return NextResponse.json(tasks);
    }
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    return NextResponse.json(
      {
        message: 'Erro ao processar a requisição',
        error: error instanceof Error ? error.message : 'Erro desconhecido'
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const { _id, ...updates } = await request.json();
    if (!_id) {
      return NextResponse.json(
        { message: 'ID da tarefa não fornecido' },
        { status: 400 }
      );
    }

    const updatedTask = await updateTask(_id, updates);
    // console.log('entrei');
    // const updatedTask = await new Promise((resolve) => {
    //   setTimeout(async () => {
    //     resolve(await updateTask(_id, updates));
    //     console.log('entrei');
    //   }, 7000);
    // });

    if (!updatedTask) {
      return NextResponse.json(
        { message: 'Tarefa não encontrada' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedTask);
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Erro ao processar a requisição',
        error: error instanceof Error ? error.message : 'Erro desconhecido'
      },
      {
        status: 500
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const savedTask = await saveTask(data);

    return NextResponse.json(savedTask);
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Erro ao processar a requisição',
        error: error instanceof Error ? error.message : 'Erro desconhecido'
      },
      {
        status: 500
      }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('_id');
    const action = url.searchParams.get('action');

    if (action === 'all') {
      const result = await deleteAllTasks();
      if (result.success) {
        return NextResponse.json(
          { message: result.message, deletedCount: result.deletedCount },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { message: 'Erro ao excluir todas as tarefas', error: result.error },
          { status: 500 }
        );
      }
    }

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: 'ID inválido fornecido' },
        { status: 400 }
      );
    }

    const deletedTask = await deleteTask(id);

    if (!deletedTask) {
      return NextResponse.json(
        { message: 'Tarefa não encontrada' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Tarefa deletada com sucesso' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Erro ao processar a requisição',
        error: error instanceof Error ? error.message : 'Erro desconhecido'
      },
      {
        status: 500
      }
    );
  }
}
