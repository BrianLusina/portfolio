declare type MainSkillResponseDto = {
    items: MainSkillResponseItemDto[];
} & Omit<CollectionResponseDto, "items">

declare type MainSkillResponseItemDto = {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    title: string;
    description: string;
    tag?: string;
}
