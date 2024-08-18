import React from 'react';
import StarIcon from 'src/utils/icons/StarIcon';

interface InputStarCheckListBoxProps {
  taskId: string;
  editTaskId: string;
  checkboxState: boolean;
  onCheckboxChange: (taskId: string, checked: boolean) => void;
}

const InputStarCheckListBox: React.FC<InputStarCheckListBoxProps> = ({
  taskId,
  editTaskId,
  checkboxState,
  onCheckboxChange
}) => {
  return (
    <label
      title="Favorito"
      style={{
        cursor: editTaskId !== taskId ? 'default' : 'pointer'
      }}
      className="w-fit bg-transparent absolute top-2 right-4"
      tabIndex={0}
    >
      <input
        style={{ display: 'none' }}
        className="bg-transparent w-fit"
        type="checkbox"
        checked={checkboxState}
        disabled={editTaskId !== taskId}
        onChange={(e) => onCheckboxChange(taskId, e.target.checked)}
      />
      <span className="w-fit">
        <StarIcon isFilled={checkboxState} />
      </span>
    </label>
  );
};

export default InputStarCheckListBox;
