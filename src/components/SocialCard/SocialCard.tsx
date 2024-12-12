import { FunctionComponent } from 'react';
import { SocialCardProps } from './SocialCard.props';
import { FaTwitter, FaInstagram, FaLinkedinIn,FaGithub } from 'react-icons/fa';
import {
  SocialCardLink,
  SocialCardList,
  SocialCardListItem,
  SocialCardTitle,
  SocialCardWrapper,
} from './styles';
import { SocialCardItem } from './SocialCard.props';

const socialCardItems: SocialCardItem[] = [
  {
    label: 'Twitter',
    link: 'https://twitter.com/BrianLusina',
    iconName: 'twitter',
    icon: <FaTwitter />,
  },
  {
    label: 'Github',
    link: 'https://github.com/BrianLusina',
    iconName: 'github',
    icon: <FaGithub />,
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/brianlusina/',
    iconName: 'linkedin',
    icon: <FaLinkedinIn />,
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/brianlusina/',
    iconName: 'instagram',
    icon: <FaInstagram />
  },
];

const SocialCard: FunctionComponent<SocialCardProps> = ({
  title,
  items = socialCardItems,
  iconColor = 'black'
}: SocialCardProps) => {
  return (
    <SocialCardWrapper className='social-share-inner'>
      {title && <SocialCardTitle>Follow</SocialCardTitle>}
      <SocialCardList className={`social-share social-style--2 color-${iconColor} d-flex justify-content-start liststyle`}>
        {items.map(({ label, link, icon }) => (
          <SocialCardListItem key={label} id={label} data-testid={label}>
            <SocialCardLink href={link} className={`icon brands style2`}>
              {icon}
            </SocialCardLink>
          </SocialCardListItem>
        ))}
      </SocialCardList>
    </SocialCardWrapper>
  );
};

export default SocialCard;
