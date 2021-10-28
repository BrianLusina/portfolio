import { ReactElement } from 'react';
import GainMorePane from '@components/panes/GainMorePane';
import IconGrid from '@components/icons/grid';
import { Content } from '@styles/layout';
import {
  TwoPaneLayoutContainer,
  PageCol,
  PageRow,
  PageContainer,
  PageTextCaption,
  LeftPaneCol,
  TwoPaneLogo,
} from './styles';
import RootLayout from '../RootLayout';
import { TwoPaneLayoutProps } from './TwoPaneLayout.interface';

export default function TwoPaneLayout({
  id = 'twopane',
  title,
  children,
}: TwoPaneLayoutProps): ReactElement<TwoPaneLayoutProps> {
  return (
    <RootLayout title={title}>
      <TwoPaneLayoutContainer id={id} title={title} className="two-pane-layout">
        <PageRow align="middle">
          <LeftPaneCol xs={{ span: 24 }} lg={{ span: 12 }}>
            <GainMorePane />
          </LeftPaneCol>

          <PageCol xs={{ span: 24 }} lg={{ span: 12 }}>
            <PageContainer>
              <IconGrid icon={TwoPaneLogo} cols={24} rows={3} />
              <Content>
                {children}
                <PageTextCaption>© Events Afrique. All rights reserved.</PageTextCaption>
              </Content>
            </PageContainer>
          </PageCol>
        </PageRow>
      </TwoPaneLayoutContainer>
    </RootLayout>
  );
}
