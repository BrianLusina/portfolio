type ProjectType = {
    name: string;
    description: string;
    link: string;
}

export type ProjectPageLayoutProps = {
    title: string;
    description: string;
    projects: ProjectType[];
    hasNextPage: boolean;
    loading: boolean;
    error?: Error;
    fetchMoreCallback: () => void;
}
