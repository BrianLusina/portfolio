import { FunctionComponent } from 'react';
import { SocialCardProps } from './SocialCard.interface';
import socialCardItems from './constants';
import {
  SocialCardLink,
  SocialCardList,
  SocialCardListItem,
  SocialCardSpan,
  SocialCardTitle,
  SocialCardWrapper,
} from './styles';

const SocialCard: FunctionComponent<SocialCardProps> = ({
  items = socialCardItems,
}: SocialCardProps) => {
  return (
    <SocialCardWrapper>
      <SocialCardTitle>Follow</SocialCardTitle>
      <SocialCardList className="icons">
        {items.map(({ label, link, iconName }) => (
          <SocialCardListItem key={label}>
            <SocialCardLink href={link} className={`icon brands style2 fa-${iconName}`}>
              <SocialCardSpan className="label">{label}</SocialCardSpan>
            </SocialCardLink>
          </SocialCardListItem>
        ))}
      </SocialCardList>
    </SocialCardWrapper>
  );
};

export default SocialCard;
