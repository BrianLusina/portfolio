import styled from 'styled-components';

export const FooterContainer = styled.footer``;

export const FooterWrapper = styled.div``;

export const FooterLeft = styled.div``;

type FooterRightProps = {
    imageSrc?: string;
}

export const FooterRight = styled.div<FooterRightProps>(
    ({ imageSrc }) => ({
        backgroundImage: `url(${imageSrc})`
    })
);

export const FooterCopyright = styled.ul``;
