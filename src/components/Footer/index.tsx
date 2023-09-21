import styled from 'styled-components';

const FooterStyle = styled.footer`
  background-color: var(--dark-green);
  width: 100%;
  position: fixed;
  bottom: 0;
  p {
    color: var(--black);
    text-align: center;
    padding: 1rem 0;
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <p>
        &copy; 2023
        {' '}
        <strong>Guilherme Fernandes</strong>
        {' '}
        Dev
      </p>
    </FooterStyle>
  );
}
