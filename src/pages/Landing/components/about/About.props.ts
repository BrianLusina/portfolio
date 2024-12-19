import { ReactNode } from "react";

export type AboutProps = {
    title?: string;
    description?: string;
}

export type AboutSectionTab = {
    tabTitle: string;
    content: Content[]; 
};

type Content = {
    title: ReactNode;
    description: ReactNode;
}
