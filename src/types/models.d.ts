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

declare type BlogPostItem = {
    imageUrl: string;
    title: string;
    category: string;
    link: string;
}