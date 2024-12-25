import { FunctionComponent } from 'react';
import { TabProps } from './Tab.props';
import { Tab as ReactTab, Tabs as ReactTabs, TabList, TabPanel } from 'react-tabs';

const Tabs: FunctionComponent<TabProps> = ({ tabstyle = 'tab-style--1', tabs }) => {
  const tabTitles = tabs.map((t) => t.title);
  const tabPanels = tabs.map((t) => t.content);

  return (
    <div>
      <div className="tabs-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ReactTabs>
                <TabList className={`${tabstyle}`}>
                  {tabTitles.map((tab) => (
                    <ReactTab key={tab}>{tab}</ReactTab>
                  ))}
                </TabList>
                {tabPanels.map((tab, index) => (
                  <TabPanel key={index}>{tab}</TabPanel>
                ))}
              </ReactTabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
