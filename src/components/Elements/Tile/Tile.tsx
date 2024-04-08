import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { TileProps } from './Tile.types';
import TileThumbnail from './TileThumbnail.jpg';
import {
  TileContent,
  TileDescription,
  TileImage,
  TileImageContainer,
  TileTitle,
  TileContainer,
  TileImageThumbnail,
  TileContentWrapper,
  TileButton,
} from './styles';

const Tile: FunctionComponent<TileProps> = ({
  className,
  title,
  subtitle,
  description,
  link,
  poster,
  thumbnail
}: TileProps) => {
  return (
    <TileContainer className={`${className}`}>
      <TileImageContainer className="thumbnail-inner">
        <TileImageThumbnail className='thumbnail' srcUrl={thumbnail || TileThumbnail} />
        <TileImage className='bg-blr-image' srcUrl={poster || TileThumbnail} />
      </TileImageContainer>

      <TileContentWrapper className='content'>
        <TileContent className="inner">
          {subtitle && <p>{subtitle}</p>}
          <Link to={link}>
            <TileTitle>{title}</TileTitle>
          </Link>
          <Link to={link}>
            <TileDescription>{description}</TileDescription>
          </Link>
          <TileButton>
            <Link to={link} className='rn-button'>View Details</Link>
          </TileButton>
        </TileContent>
      </TileContentWrapper>
      <Link className="link-overlay" to={link}/>
    </TileContainer>
  );
};

export default Tile;
