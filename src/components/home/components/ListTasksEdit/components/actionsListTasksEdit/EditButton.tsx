import React from 'react';
import { MdOutlineModeEdit } from 'react-icons/md';
import { VscSaveAs } from 'react-icons/vsc';
import { useTasksContext } from 'src/contexts/tasksProvider';

interface EditButtonProps {
  isEditing: boolean;
  taskId: string;
}
const EditButton = ({ isEditing, taskId }: EditButtonProps) => {
  const { handleEdit, updateTask } = useTasksContext();

  return (
    <button
      type="button"
      onClick={!isEditing ? () => handleEdit(taskId) : () => updateTask()}
    >
      {isEditing ? (
        <VscSaveAs title="salvar" className="size-6 fill-deepGray" />
      ) : (
        <MdOutlineModeEdit title="editar" className="size-6 fill-deepGray" />
      )}
    </button>
  );
};

export default EditButton;
