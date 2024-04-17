import { ReactNode } from "react";

export type SocialCardItem = {
  label: string;
  link: string;
  iconName: string;
  icon: ReactNode;
};

export type SocialCardProps = {
  title?: string;
  items?: SocialCardItem[];
  iconColor?: 'light' | 'black'
};
