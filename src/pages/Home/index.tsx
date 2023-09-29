/* eslint-disable react/jsx-max-depth */
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

import cartoonDev from '../../image/cartoon-dev.svg';
import styles from './Home.module.css';
import { Aside, ALink, Container, H2 } from './styled';

function Home() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ['REACT', 'TAILWIND', 'DOCKER', 'MYSQL',
        'TYPESCRIPT', 'JSES6', 'REDUX', 'JEST', 'WEB 3'],
      typeSpeed: 150,
      backDelay: 1000,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.current.destroy();
    };
  });

  return (
    <main className={ `page ${styles.home} background-image` }>
      <div className={ styles['infos-container'] }>
        <section>
          <article>
            <h3>&lt;Hello World&gt;</h3>
            <h1>GUILHERME FERNANDES</h1>
            <h2>SOFTWARE ENGINEER FULLSTACK</h2>
            <h2>
              &lt;&nbsp;
              <span className={ styles.office } ref={ el } />
              &nbsp;&gt;
            </h2>
          </article>
          <div className={ styles['btn-container'] }>
            <a
              className={ styles['btn-exercises'] }
              href="https://drive.google.com/file/d/1O8Qdp2g71W0xb4SKEHRav1hDSbQtd-mT/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className={ styles['home-button'] }>
                CURRÍCULO
              </button>
            </a>
          </div>
        </section>
        <section className={ styles.cartoon }>
          <img
            className={ styles['photo-home'] }
            src={ cartoonDev }
            alt="desenho de um boneco programando"
          />
        </section>
      </div>
      <Aside>
        <H2>SIGA-ME</H2>
        <Container>
          <ALink href="https://www.linkedin.com/in/guifernandesdev/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </ALink>
          <ALink href="https://github.com/GuiiFernandes" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </ALink>
          <ALink href="https://www.instagram.com/guifernandesjj/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </ALink>
        </Container>
      </Aside>
    </main>
  );
}

export default Home;
