import { NavLink } from 'react-router-dom';

import './Header.css';
import { HeaderStyle, Nav } from './styled';

export default function Header() {
  return (
    <HeaderStyle>
      <Nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">Sobre</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projetos</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contato</NavLink>
          </li>
        </ul>
      </Nav>
    </HeaderStyle>
  );
}
