import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import './Header.css';

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
`;
const Nav = styled.nav`
  width: 75%;
  max-width: var(--max-width);
  margin: auto;
  ul {
    text-align: end;
    padding: 1rem;
    li {
      list-style: none;
      display: inline;
      text-align: center;
      padding: 0 2rem;
      a {
        text-decoration: none;
        color: var(--white);
        &:hover {
          color: var(--dark-green);
        }
      }
      .active {
        color: var(--dark-green);
        font-size: 2.5rem;
        font-weight: 700;
        text-shadow: 0px 0px 5px rgba(0,0,0,0.5);
      }
    }
  }
`;

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
