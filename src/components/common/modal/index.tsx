import { useRef } from 'react';
import { useTasksContext } from 'src/contexts/tasksProvider';
import { useOutsideEvents } from 'src/hooks';
import { Color, ITaskProps } from 'src/types/taskType';

interface IColorPickerProps {
  isModalOpen: boolean;
  onClose: () => void;
  taskId: string | null;
}

const ColorPickerModal: React.FC<IColorPickerProps> = ({
  isModalOpen,
  onClose,
  taskId
}) => {
  const { setTasks, setEditedTask } = useTasksContext();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleColorSelect = (color: Color) => {
    if (taskId) {
      setTasks((prevTasks: ITaskProps[]) =>
        prevTasks.map((task) =>
          task._id === taskId ? { ...task, color } : task
        )
      );
      setEditedTask((prev: any) => ({ ...prev, color }));
      onClose();
    }
  };

  useOutsideEvents(modalRef, onClose);

  if (!isModalOpen) return null;

  return (
    <div
      ref={modalRef}
      className="z-30 fixed bottom-10 -translate-x-8 bg-whiteSnow rounded shadow-md flex flex-wrap justify-center gap-1 p-2"
    >
      {Object.values(Color)
        .filter(
          (color) => color !== Color.None && color.toLowerCase() !== 'none'
        )
        .map((color) => (
          <div
            key={color}
            className="w-8 h-8 rounded-full cursor-pointer border"
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          />
        ))}
    </div>
  );
};

export default ColorPickerModal;
