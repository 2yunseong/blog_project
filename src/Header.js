import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div``;

const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to='/'>Yunseong.Devlog</NavLink>
      <NavLink to='/'>Profile</NavLink>
      <NavLink to='/portfolio'>Poftfolio</NavLink>
      <NavLink to='/tech'>Tech</NavLink>
      <NavLink to='/activity'>activities</NavLink>
    </HeaderContainer>
  );
};

export default Header;
