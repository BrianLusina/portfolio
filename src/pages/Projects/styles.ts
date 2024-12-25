import styled from 'styled-components';

type ProjectPageHeroProps = {
    imageSrc?: string;
}

export const ProjectPageHero = styled.div<ProjectPageHeroProps>(({ imageSrc }) => ({
    backgroundImage: `url(${imageSrc})`
}));

export const ProjectsPageWrapper = styled.main``;

export const ProjectsPageSlickDot = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    responsive: [{
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 993,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 580,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 481,
        settings: {
            slidesToShow: 1,
        }
    }
    ]
}