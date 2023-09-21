/* eslint-disable react/jsx-max-depth */
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

import cartoonDev from '../../image/cartoon-dev.svg';
import styles from './Home.module.css';

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
            <h2>SOFTWARE ENGINEER FULLSTACK JR.</h2>
            <h2>
              &lt;&nbsp;
              <span className={ styles.office } ref={ el } />
              &nbsp;&gt;
            </h2>
          </article>
          <div className={ styles['btn-container'] }>
            <Link className={ styles['btn-exercises'] } to="/projects">
              <button type="button" className={ styles['home-button'] }>
                MEUS PROJETOS
              </button>
            </Link>
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
      <aside className={ styles['icon-container'] }>
        <p>SIGA-ME</p>
        <a href="https://www.linkedin.com/in/guifernandesdev/" target="_blank" className={ styles['icon-link'] } rel="noopener noreferrer">
          <FaLinkedinIn className={ styles.icon } />
        </a>
        <a href="https://github.com/GuiiFernandes" className={ styles['icon-link'] } target="_blank" rel="noopener noreferrer">
          <FaGithub className={ styles.icon } />
        </a>
        <a href="https://www.instagram.com/guifernandesjj/" className={ styles['icon-link'] } target="_blank" rel="noopener noreferrer">
          <FaInstagram className={ styles.icon } />
        </a>
      </aside>
    </main>
  );
}

export default Home;
