import React from 'react';
import ContainerMedium from 'src/components/common/container/ContainerMedium';
import { FormTask } from '../../components/formTask';

function TemplateTask() {
  return (
    <section className="global-section">
      <ContainerMedium id="container-create-task">
        <div className="flex justify-center">
          <FormTask />
        </div>
      </ContainerMedium>
    </section>
  );
}

export default TemplateTask;
