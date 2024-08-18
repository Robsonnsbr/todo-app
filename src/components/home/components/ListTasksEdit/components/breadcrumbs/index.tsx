import React from 'react';
import { useTasksContext } from 'src/contexts/tasksProvider';
import { useFilterPhrase } from 'src/hooks';

const BreadcrumbsFilter = () => {
  const { filters } = useTasksContext();
  const phrase = useFilterPhrase(filters);

  return (
    <nav title="filter">
      <span className="font-inter text-xs text-deepGray">{phrase}</span>
    </nav>
  );
};

export default BreadcrumbsFilter;
