import { FunctionComponent } from 'react';
import { MetaInfoProps } from './MetaInfo.interface';
import { MetaInfoHeader, MetaInfoTitle } from './styles';

const MetaInfo: FunctionComponent<MetaInfoProps> = ({
  author: { name, url },
  project: { name: projectName, url: projectUrl },
  description,
}) => {
  return (
    <MetaInfoHeader>
      <MetaInfoTitle>
        This is {projectName}, a journal of projects done by <a href={url}>{name}</a>
        <br />
        View <i>some</i> of them <a href={projectUrl}>here</a>.
      </MetaInfoTitle>
      {description}
    </MetaInfoHeader>
  );
};

export default MetaInfo;
