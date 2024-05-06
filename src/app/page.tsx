import MainPage from '@/components';
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

  return <MainPage projects={allProjects} />;
}
