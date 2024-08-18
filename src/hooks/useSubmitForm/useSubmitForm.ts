'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schemaZod } from 'src/hooks/useSubmitForm/schemaZod';
import { FormDataProps } from './types';
import { useTasksContext } from 'src/contexts/tasksProvider';
import { Color, ITaskProps, ITaskPropsOmitID } from 'src/types/taskType';

export const useSubmitForm = () => {
  const { setTasks } = useTasksContext();
  const [isWasSend, setIsWasSend] = useState(false);
  const [isError, setError] = useState(false);
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormDataProps>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(schemaZod),
    defaultValues: {
      title: '',
      message: '',
      isFavorite: false
    }
  });

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(handleSubmitForm);
      e.currentTarget.form?.dispatchEvent(
        new Event('submit', { bubbles: true })
      );
    }
  };

  const handleSubmitForm = async (data: ITaskPropsOmitID) => {
    const { title, message, isFavorite } = data;

    const newTask: Omit<ITaskProps, '_id'> = {
      title,
      message,
      isFavorite,
      color: Color.WhiteSnow
    };

    try {
      const response = await fetch('/api/todolist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
      });

      if (response.ok) {
        const resultado: ITaskProps = await response.json();

        setTasks((prevTasks) => [...prevTasks, resultado]);

        setIsWasSend(true);
        reset();
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      console.error('Erro ao salvar tarefa:', error);
    }
  };

  return {
    handleSubmitForm,
    register,
    handleSubmit,
    handleKeyDown,
    setValue,
    reset,
    isWasSend,
    isError,
    errors,
    isSubmitting
  };
};
