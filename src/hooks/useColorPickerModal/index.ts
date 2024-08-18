// import { useState } from 'react';
// import { Color } from 'src/types/taskType';
// import { useTasksContext } from 'src/contexts/tasksProvider';

// export const useColorPicker = () => {
//   const { handleInputChange } = useTasksContext();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentTaskId, setCurrentTaskId] = useState<string | null>(null);

//   const openColorPicker = (taskId: string) => {
//     setCurrentTaskId(taskId);
//     setIsModalOpen(true);
//   };

//   const closeColorPicker = () => {
//     setIsModalOpen(false);
//     setCurrentTaskId(null);
//   };

//   const handleColorSelect = (color: Color) => {
//     if (currentTaskId) {
//       handleInputChange('color', color);
//       closeColorPicker();
//     }
//   };

//   return {
//     isModalOpen,
//     openColorPicker,
//     closeColorPicker,
//     handleColorSelect,
//     setIsModalOpen
//   };
// };
