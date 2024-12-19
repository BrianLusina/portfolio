import styled from 'styled-components';

type ProjectPageHeroProps = {
    imageSrc?: string;
}

export const ProjectPageHero = styled.div<ProjectPageHeroProps>(({ imageSrc }) => ({
    backgroundImage: `url(${imageSrc})`
}));
