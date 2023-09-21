export type ProjectType = {
  title: string;
  id: number;
  gif: string;
  link?: string;
  description: string;
  github: string;
  tags: string;
};

export type ProjectProps = {
  project: ProjectType;
};

export type ProjectsProps = {
  mainProjects: ProjectType[];
};
