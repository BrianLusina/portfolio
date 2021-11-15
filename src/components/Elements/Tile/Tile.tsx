import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { TileProps } from './Tile.types';
import TileThumbnail from './TileThumbnail.jpg';
import {
  TileContainer,
  TileContent,
  TileDescription,
  TileImage,
  TileImageContainer,
  TileTitle,
} from './styles';

const Tile: FunctionComponent<TileProps> = ({
  className,
  title,
  description,
  link,
  poster,
}: TileProps) => {
  return (
    <TileContainer className={`${className || 'tile'}`}>
      <TileImageContainer className="image">
        <TileImage src={poster || TileThumbnail} alt={title} />
      </TileImageContainer>
      <Link to={link}>
        <TileTitle>{title}</TileTitle>
        <TileContent className="content">
          <TileDescription>{description}</TileDescription>
        </TileContent>
      </Link>
    </TileContainer>
  );
};

export default Tile;
