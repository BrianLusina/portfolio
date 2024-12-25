import styled from "styled-components";

type BreadcrumbWrapperProps = {
    imageSrc?: string;
}

export const BreadcrumbWrapper = styled.div<BreadcrumbWrapperProps>(({ imageSrc }) => ({
    backgroundImage: `url(${imageSrc})`
}));

export const BreadcrumbDescription = styled.p`
    color: white;
`
