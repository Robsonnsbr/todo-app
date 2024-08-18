import Main from 'src/components/main';
import TemplateTask from 'src/components/home/templates/templateTask';
import TemplateListTasks from 'src/components/home/templates/templateListTasks';
export default function Home() {
  return (
    <>
      <Main className="pt-0" id="top-main">
        <TemplateTask />
        <TemplateListTasks />
      </Main>
    </>
  );
}
