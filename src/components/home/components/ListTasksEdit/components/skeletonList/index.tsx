import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useTasksContext } from 'src/contexts/tasksProvider';
import { GiPotionBall } from 'react-icons/gi';

const LoadingSkeleton = () => {
  const { msgTasksEmpty } = useTasksContext();
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-offset="0"
      className="font-inter text-base text-deepGray"
    >
      {msgTasksEmpty ? (
        <div className="flex flex-col items-center justify-center">
          <GiPotionBall color="purple" size={30} />
          <p className="bg-transparent">
            Nenhuma nota atende aos critérios de pesquisa
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center animate-pulse">
          <AiOutlineLoading3Quarters className="size-4 animate-spin" />
          <p className="bg-transparent">Obtendo notas...</p>
        </div>
      )}
    </div>
  );
};

export default LoadingSkeleton;
