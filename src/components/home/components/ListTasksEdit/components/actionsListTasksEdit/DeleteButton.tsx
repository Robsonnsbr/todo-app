import React from 'react';
import { RiCloseLargeFill } from 'react-icons/ri';
import { useTasksContext } from 'src/contexts/tasksProvider';

interface DeleteButtonProps {
  isEditing: boolean;
  taskId: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ taskId, isEditing }) => {
  const { handleDelete } = useTasksContext();

  return (
    <button onClick={() => handleDelete(taskId)} disabled={!isEditing}>
      <RiCloseLargeFill
        className={`size-6 ${isEditing ? 'fill-errorRed' : 'fill-deepGray'}`}
        title="deletar"
      />
    </button>
  );
};

export default DeleteButton;
