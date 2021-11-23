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
