import LoadingSkeleton from './components/skeletonList';
import { useTasksContext } from 'src/contexts/tasksProvider';
import { useState, useEffect } from 'react';
import UserActions from './components/actionsListTasksEdit';
import StarCheckbox from './components/inputs';
import { Color } from 'src/types/taskType';
import { dateFormatter } from 'src/utils/dateFormatter';
import BreadcrumbsFilter from './components/breadcrumbs';

export const ListTasksEdit = () => {
  const { filteredTasks, editTaskId, handleInputChange } = useTasksContext();
  const [checkboxStates, setCheckboxStates] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const initialCheckboxStates = filteredTasks.reduce(
      (acc, task) => {
        acc[task._id] = task.isFavorite ?? false;
        return acc;
      },
      {} as { [key: string]: boolean }
    );

    setCheckboxStates(initialCheckboxStates);
  }, [filteredTasks]);

  const handleCheckboxChange = (taskId: string, isChecked: boolean) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [taskId]: isChecked
    }));
    handleInputChange('isFavorite', isChecked);
  };

  return (
    <div>
      <BreadcrumbsFilter />
      {filteredTasks.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-4">
          {filteredTasks
            .slice()
            .reverse()
            .map((task) => (
              <div
                data-aos="flip-left"
                key={task._id}
                className="flex-grow max-w-[384px] min-w-[300px] w-full min-h-[420px] sm:w-1/2 lg:w-1/3 p-2"
              >
                <div
                  style={{
                    backgroundColor: task.color || 'var(--whiteSnow)'
                  }}
                  className="z-10 flex relative flex-col border rounded-3xl shadow-md w-full h-full"
                >
                  <StarCheckbox
                    taskId={task._id}
                    editTaskId={editTaskId || ''}
                    checkboxState={checkboxStates[task._id] || false}
                    onCheckboxChange={handleCheckboxChange}
                  />

                  <input
                    type="text"
                    defaultValue={task.title}
                    disabled={editTaskId !== task._id}
                    className="border rounded-t-3xl bg-transparent font-semibold  border-none"
                    onChange={(e) => handleInputChange('title', e.target.value)}
                  />
                  <hr
                    className={`border ${task.color === Color.WhiteSnow ? ' border-mediumGray' : 'border-whiteSnow'}`}
                  />
                  <textarea
                    defaultValue={task.message}
                    disabled={editTaskId !== task._id}
                    className="border rounded bg-transparent h-full resize-none border-none"
                    onChange={(e) =>
                      handleInputChange('message', e.target.value)
                    }
                  />
                  <UserActions
                    taskId={task._id}
                    isEditing={editTaskId === task._id}
                  />
                </div>
                <span className="font-inter text-xs text-center text-deepGray block pt-1">
                  {task.updatedAt
                    ? `Última alteração: ${dateFormatter(task.updatedAt.toString())}`
                    : 'Nova Nota'}
                </span>
              </div>
            ))}
        </div>
      ) : (
        <LoadingSkeleton />
      )}
    </div>
  );
};
