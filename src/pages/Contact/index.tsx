import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io5';

import ContactForm from '../../components/ContactForm';
import { Main, IFrame, ContactContainer, Aside, ALink, H2, Container } from './styled';

export default function Contact() {
  return (
    <Main className="page background-color">
      <ContactContainer>
        <ContactForm />
        <IFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59495.54616324792!2d-45.03954996711276!3d-21.252790650720893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ffd8039b103f9%3A0x39e3fcfba35cb1f3!2sLavras%2C%20MG%2C%2037200-000!5e0!3m2!1spt-BR!2sbr!4v1682279365156!5m2!1spt-BR!2sbr" style={ { border: 0 } } allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </ContactContainer>
      <Aside>
        <H2>ENTRE EM CONTATO</H2>
        <Container>
          <ALink href="https://www.linkedin.com/in/guifernandesdev/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </ALink>
          <ALink href="https://www.instagram.com/guifernandesjj/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </ALink>
          <ALink href="https://wa.me/553588866349" target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp />
          </ALink>
        </Container>
      </Aside>
    </Main>
  );
}
