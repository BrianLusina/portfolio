import { FunctionComponent } from 'react';
import { TileProps } from './Tile.types';

const ProjectItem: FunctionComponent<TileProps> = ({
  title,
  description,
  onClick,
  className = '',
}: TileProps) => {
  return (
    <article className={`${className} style1`}>
      <span className="image">
        <img src="images/pic01.jpg" alt="" />
      </span>
      <a href="generic.html" onClick={onClick}>
        <h2>{title}</h2>
        <div className="content">
          <p>{description}</p>
        </div>
      </a>
    </article>
  );
};

export default ProjectItem;
