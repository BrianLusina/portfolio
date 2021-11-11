import config from '@config';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { MenuProps } from './Menu.interface';
import { MenuCloseButton, MenuContainer, MenuList, MenuListItem, MenuTitle } from './styles';

const Menu: FunctionComponent<MenuProps> = ({ items = config.menuItems }: MenuProps) => {
  return (
    <MenuContainer id="menu">
      <div className="inner">
        <MenuTitle>Menu</MenuTitle>
        <MenuList>
          {items.map(({ link, label, isExternal = false }) => (
            <MenuListItem key={label}>
              {isExternal ? <a href={link}>{label}</a> : <Link to={link}>{label}</Link>}
            </MenuListItem>
          ))}
        </MenuList>
      </div>
      <MenuCloseButton className="close" href="#menu">
        Close
      </MenuCloseButton>
    </MenuContainer>
  );
};

export default Menu;
