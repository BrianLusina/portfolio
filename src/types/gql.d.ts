declare type RepositoryOwner = {
    login: string;
    avatarUrl: string;
}

declare type RepositoryObject = {
    name: string;
    description: string;
    url: string;
    owner: RepositoryOwner
    object: any
}

declare type GetRepositoriesData = {
    viewer: { 
        repositories: {
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
}

declare type GetRepositoryVariables = {
    owner: string;
    name: string;
}
