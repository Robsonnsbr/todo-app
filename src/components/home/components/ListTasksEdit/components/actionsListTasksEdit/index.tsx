import React from 'react';
import EditButton from './EditButton';
import OpenModalButton from './OpenModalButton';
import DeleteButton from './DeleteButton';
import { useTasksContext } from 'src/contexts/tasksProvider';

interface UserActionsProps {
  taskId: string;
  isEditing: boolean;
}

const UserActions: React.FC<UserActionsProps> = ({ taskId, isEditing }) => {
  const { editTaskId } = useTasksContext();

  return (
    <div className="flex items-center justify-between w-full py-2 px-6">
      <div className="flex items-center gap-2">
        <EditButton isEditing={isEditing} taskId={taskId} />
        <OpenModalButton taskId={taskId} isEditing={isEditing} />
      </div>

      <DeleteButton isEditing={editTaskId === taskId} taskId={taskId} />
    </div>
  );
};

export default UserActions;
