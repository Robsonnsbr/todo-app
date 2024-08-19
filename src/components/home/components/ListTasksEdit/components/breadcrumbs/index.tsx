import React from 'react';
import { useTasksContext } from 'src/contexts/tasksProvider';
import { useFilterPhrase } from 'src/hooks';

const BreadcrumbsFilter = () => {
  const { filters, filteredTasks } = useTasksContext();
  const { phrase, qtFiltered } = useFilterPhrase(filters, filteredTasks);

  return (
    <nav
      title="filter"
      className="flex flex-wrap sm:justify-between sm: gap-1 font-inter text-xs text-deepGray font-medium"
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
