import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { TileProps } from './Tile.types';
import TileThumbnail from './TileThumbnail.jpg';

const Tile: FunctionComponent<TileProps> = ({
  className,
  title,
  description,
  link,
  poster,
}: TileProps) => {
  return (
    <article className={`${className || 'tile'}`}>
      <span className="image">
        <img src={poster || TileThumbnail} alt={title} />
      </span>
      <Link to={link}>
        <h2>{title}</h2>
        <div className="content">
          <p>{description}</p>
        </div>
      </Link>
    </article>
  );
};

export default Tile;
