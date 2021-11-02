import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { TileProps } from './Tile.types';

const Tile: FunctionComponent<TileProps> = ({
  className = '',
  title,
  description,
  onClick,
  link,
  poster,
}: TileProps) => {
  return (
    <article className={`${className} style1`}>
      <span className="image">
        {/* TODO: provide fallback image */}
        <img src={poster} alt={title} />
      </span>
      <Link to={link} onClick={onClick}>
        <h2>{title}</h2>
        <div className="content">
          <p>{description}</p>
        </div>
      </Link>
    </article>
  );
};

export default Tile;
