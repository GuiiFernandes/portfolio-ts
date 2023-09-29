import styled from 'styled-components';

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ALink = styled.a`
  margin: 1rem;
  color: var(--white);
  font-size: 4.5rem;
  &:hover {
    transform: scale(1.2);
    transition: scale 0.2s ease-in;
    color: var(--dark-green);
  }
`;

export const H2 = styled.h2`
  width: 100%;
  margin: 0px;
  text-align: center;
  font-size: 4.5rem;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
