declare type GetRepositoryPageInfo = {
    startCursor: string;
    endCursor: string;
    hasNextPage: boolean;
}

declare type GetRepositoriesData = {
    viewer: { 
        login: string;
        repositories: {
            pageInfo: GetRepositoryPageInfo,
            nodes: RepositoryObject[]
        }
    }
}

declare type GetRepositoryData = {
    repository: RepositoryObject
}

declare type GetRepositoriesVariables = {
    direction: 'ASC' | 'DESC';
    field: 'NAME' | 'CREATED_AT' | 'UPDATED_AT' | 'STARGAZERS' | 'PUSHED_AT';
    first: number;
    after?: string;
    before?: string;
    last?: number;
}

declare type GetRepositoryVariables = {
    owner: string;
    name: string;
}
