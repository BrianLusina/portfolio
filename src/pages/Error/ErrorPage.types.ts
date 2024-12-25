import { ReactNode } from 'react';

export type ErrorPageProps = {
  title?: ReactNode;
  subtitle?: ReactNode;
  message?: ReactNode;
  cta?: ReactNode;
};
