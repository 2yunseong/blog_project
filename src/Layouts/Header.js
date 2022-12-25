import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './Header.module.scss';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 30px;
`;

const handleNavStyle = ({ isActive }) => {
  return {
    color: 'black',
    textDecoration: 'none',
    outline: 'none',
    borderBottom: isActive ? '2px solid black' : '',
    margin: '30px 30px 0 30px',
  };
};

const handleTitleStyle = ({ isActive }) => {
  return {
    color: 'black',
    textDecoration: 'none',
    outline: 'none',
    fontSize: '1.5em',
    fontWeight: '700',
  };
};

const NavContainer = styled.div``;
const Header = () => {
  return (
    <HeaderContainer>
      <NavLink style={handleTitleStyle} to='/' className='title'>
        Yunseong.Devlog
      </NavLink>
      <NavContainer>
        <NavLink style={handleNavStyle} to='/'>
          Profile
        </NavLink>
        <NavLink style={handleNavStyle} to='/portfolio'>
          Poftfolio
        </NavLink>
        <NavLink style={handleNavStyle} to='/posts'>
          Post
        </NavLink>
        <NavLink style={handleNavStyle} to='/write'>
          Write
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
