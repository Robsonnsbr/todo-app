'use client';
import ContainerMedium from 'src/components/common/container/ContainerMedium';
import { ListTasksEdit } from 'src/components/home/components/ListTasksEdit';

function TemplateListTasks() {
  return (
    <section className="global-section pb-8">
      <ContainerMedium id="container-listTasks">
        <ListTasksEdit />
      </ContainerMedium>
    </section>
  );
}

export default TemplateListTasks;
