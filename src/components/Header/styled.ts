import styled from 'styled-components';

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgb(50,50,50);
  background: linear-gradient(
    0deg,
    rgba(50,50,50,0) 0%,
    rgba(50,50,50,0.7567401960784313) 33%,
    rgba(50,50,50,1) 100%
  );
`;
export const Nav = styled.nav`
  width: 75%;
  max-width: var(--max-width);
  padding-bottom: 10px;
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
