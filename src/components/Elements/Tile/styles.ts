import styled from 'styled-components';

/**
 * TileImageProps will contain the props to pass on to the style
 */
type TileImageProps = {
    srcUrl: string;
}

export const TileContainer = styled.div``;

export const TileImageContainer = styled.span``;


export const TileImageThumbnail = styled.div<TileImageProps>(
    ({ srcUrl }) => ({
        backgroundImage: `url(${srcUrl})`
    })
);

export const TileImage = styled.div<TileImageProps>(
    ({ srcUrl }) => ({
        backgroundImage: `url(${srcUrl})`
    })
);

export const TileTitle = styled.h4`
    color: white;
`;

export const TileContent = styled.div``;

export const TileContentWrapper = styled.div``;

export const TileDescription = styled.p``;

export const TileButton = styled.div`
    @extend %transition;
    margin-top: 35px;
    transition: 0.7s;
    @media #{$large-mobile} {
        margin-top: 25px;
    }
    a {
        &.rn-btn{
            color: #ffffff;
            border-color: rgba(255,255,255,0.3);
            &:hover{
                border-color: $theme-color;
            }
        }
    }
`
