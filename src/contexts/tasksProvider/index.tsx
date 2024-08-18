import React, { createContext, useContext, useState, useEffect } from 'react';
import { FilterPropsCustom, ITaskProps } from 'src/types/taskType';
import { setTimeout } from 'timers';

interface TasksContextProps {
  tasks: ITaskProps[];
  filteredTasks: ITaskProps[];
  editTaskId: string | null;
  editedTask: Partial<ITaskProps>;
  msgTasksEmpty: boolean;
  setTasks: React.Dispatch<React.SetStateAction<ITaskProps[]>>;
  handleEdit: (taskId: string) => void;
  setEditedTask: (task: Partial<ITaskProps> | any) => void;
  handleDelete: (taskId: string) => void;
  updateTask: () => void;
  handleInputChange: (field: keyof ITaskProps, value: any) => void;
  filters: FilterPropsCustom;
  setFilters: React.Dispatch<React.SetStateAction<FilterPropsCustom>>;
}

const TasksContext = createContext<TasksContextProps | undefined>(undefined);

async function fetchTasks(): Promise<ITaskProps[]> {
  const response = await fetch('/api/todolist', {
    method: 'GET'
  });
  if (!response.ok) {
    throw new Error(`Erro ao buscar tarefas: ${response.statusText}`);
  }
  return await response.json();
}

export const TasksProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [tasks, setTasks] = useState<ITaskProps[]>([]);
  const [filters, setFilters] = useState<FilterPropsCustom>({});
  const [filteredTasks, setFilteredTasks] = useState<ITaskProps[]>([]);
  const [msgTasksEmpty, setMsgTasksEmpty] = useState<boolean>(false);
  const [editTaskId, setEditTaskId] = useState<string | null>(null);
  const [editedTask, setEditedTask] = useState<Partial<ITaskProps>>({});
  const [inAction, setInAction] = useState(false);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks([...data]);
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
      }
    };

    loadTasks();
  }, []);

  useEffect(() => {
    setMsgTasksEmpty(false);
    const filtered = tasks.filter((task) => {
      const taskTitle = task.title.toLowerCase();
      const filterTitle = filters.title ? filters.title.toLowerCase() : '';

      const matchesTitle = filters.title
        ? taskTitle.includes(filterTitle)
        : true;
      const matchesFavorite =
        filters.isFavorite === true ? task.isFavorite === true : true;
      const matchesColor = filters.color ? task.color === filters.color : true;

      return matchesTitle && matchesFavorite && matchesColor;
    });

    setFilteredTasks(filtered);
    if (filtered.length <= 0) {
      setTimeout(() => {
        setMsgTasksEmpty(true);
      }, 7000);
    }
  }, [tasks, filters]);

  const updateTask = async () => {
    if (inAction) return;
    setInAction(true);

    if (editTaskId) {
      try {
        const response = await fetch(`/api/todolist`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ _id: editTaskId, ...editedTask })
        });

        if (!response.ok) {
          throw new Error('Erro ao salvar tarefa');
        }

        const updatedTask = await response.json();

        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id === editTaskId ? { ...task, ...updatedTask } : task
          )
        );

        setEditTaskId(null);
      } catch (error) {
        console.error('Erro ao salvar tarefa:', error);
      } finally {
        setInAction(false);
      }
    }
  };

  const handleEdit = (taskId: string) => {
    setEditTaskId(taskId);
  };

  const handleDelete = async (taskId: string) => {
    if (inAction) return;
    setInAction(true);
    try {
      const response = await fetch(`/api/todolist?_id=${taskId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });

      if (!response.ok) {
        throw new Error('Erro ao deletar tarefa');
      }

      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
    } finally {
      setInAction(false);
    }
  };

  const handleInputChange = (field: keyof ITaskProps, value: any) => {
    setEditedTask((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <TasksContext.Provider
      value={{
        msgTasksEmpty,
        tasks,
        filteredTasks,
        editTaskId,
        editedTask,
        handleEdit,
        updateTask,
        setEditedTask,
        handleDelete,
        handleInputChange,
        filters,
        setFilters,
        setTasks
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error(
      'useTasksContext deve ser usado dentro de um TasksProvider'
    );
  }
  return context;
};
