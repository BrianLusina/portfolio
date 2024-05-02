import { FunctionComponent } from 'react';
import { WorkSectionProps } from './WorkSection.types';
import WorkSectionList from './WorkSectionList';

const WorkSection: FunctionComponent<WorkSectionProps> = ({
  id = 'portfolio',
  title = 'Portfolio',
  description = 'The kind of work I have engaged in',
}) => {
  return (
    <div id={id} className="fix">
      <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                <h2 className="title">{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="row creative-service">
            <div className="col-lg-12">
              <WorkSectionList item={6} column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
