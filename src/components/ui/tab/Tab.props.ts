import { ReactNode } from "react";

type TabPanel = {
    title: string;
    content: ReactNode;
}

export type TabProps = {
    tabstyle?: string;
    tabs: TabPanel[];
};