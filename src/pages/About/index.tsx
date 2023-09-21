import techs from '../../data/techsData';
import photo from '../../image/eu.jpg';
import styles from './About.module.css';
import InfosAbout from '../../components/InfosAbout';

export default function About() {
  return (
    <main className={ `page ${styles.about} background-color` }>
      <section className={ styles['infos-container'] }>
        <div className={ styles['photo-profile'] }>
          <img src={ photo } alt="minha foto" className={ styles.photo } />
          <div className={ styles.techs }>
            <h3>Tecnologias e ferramentas:</h3>
            <div className={ styles['techs-grid'] }>
              {techs.map(({
                id, name, logo, doc,
              }) => (
                <div key={ id } className={ styles.tech }>
                  <a
                    href={ doc }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={ logo } alt={ name } />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <InfosAbout />
          <div className={ styles['gitHub-status'] }>
            <img src="https://github-readme-stats.vercel.app/api?username=GuiiFernandes&show_icons=true&theme=dark&include_all_commits=true&count_private=true" alt="Status do GitHub" />
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=GuiiFernandes&layout=compact&langs_count=10&theme=dark" alt="Linguagens usadas no GitHub" />
          </div>
        </div>
      </section>
    </main>
  );
}
