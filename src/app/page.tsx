import { About } from '@/components/main/about';
import { Experience } from '@/components/main/experience';
import { Landing } from '@/components/main/landing';
import { Projects } from '@/components/main/projects';
import { Skills } from '@/components/main/skills';
import { AppBar } from '@/components/ui/app-bar';
import data from '@/constants/data.json';

export default async function IndexPage() {
  const { projects } = data;
  const baseURI = projects.baseURI;
  const repos = projects.repositories;
  const reqInit = {
    headers: {
      Authorization: `token ${process.env.GITHUB_API_KEY}`,
    },
  };
  const allProjects = await Promise.allSettled(
    repos.map(async name => {
      const repo = await fetch(baseURI + name, reqInit).then(res => res.json());
      const langs = await fetch(baseURI + name + '/languages', reqInit).then(
        res => res.json(),
      );
      return {
        ...repo,
        languages: Object.getOwnPropertyNames(langs),
      };
    }),
  );

  return (
    <div className="flex-grow dark">
      <AppBar />
      <div className="mx-auto container bg-background dark:bg-backgroundDark">
        <Landing />
        <About />
        <Skills />
        <Experience />
        <Projects projects={allProjects} />
      </div>
    </div>
  );
}
