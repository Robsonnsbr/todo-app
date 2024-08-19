import React from 'react';
import { useTasksContext } from 'src/contexts/tasksProvider';
import { useFilterPhrase } from 'src/hooks';

const BreadcrumbsFilter = () => {
  const { filters, filteredTasks } = useTasksContext();
  const { phrase, qtFiltered } = useFilterPhrase(filters, filteredTasks);

  return (
    <nav
      title="filter"
      className="flex justify-between font-inter text-xs text-deepGray font-medium"
    >
      <span>{phrase}</span>
      <span>
        {qtFiltered > 0
          ? qtFiltered === 1
            ? `${qtFiltered} Nota`
            : `${qtFiltered} Notas`
          : 'Nenhuma'}
      </span>
    </nav>
  );
};

export default BreadcrumbsFilter;
