import React, { useState } from 'react';
import ColorPickerModal from 'src/components/common/modal';
import { IconColor } from 'src/utils/icons/IconColor';

interface OpenModalButtonProps {
  isEditing?: boolean;
  taskId: string;
}

const OpenModalButton: React.FC<OpenModalButtonProps> = ({
  isEditing,
  taskId
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => handleModal()}
        disabled={!isEditing}
        className="flex items-center h-fit"
      >
        <IconColor isEditing={isEditing} />
      </button>
      <ColorPickerModal
        isModalOpen={isModalOpen}
        onClose={() => handleModal()}
        taskId={taskId}
      />
    </div>
  );
};

export default OpenModalButton;
