import { ReactNode } from 'react';

type Author = {
  name: string;
  url: string;
};

type Project = {
  name: string;
  url: string;
};

export type MetaInfoProps = {
  author: Author;
  project: Project;
  description: ReactNode;
};
