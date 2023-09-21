import { Link } from 'react-router-dom';
import { TbArrowBack } from 'react-icons/tb';

import TableProjects from '../../components/TableProjects';
import styles from './AllProjects.module.css';

export default function AllProjects() {
  return (
    <main className={ `page ${styles.projects} background-image` }>
      <section className={ styles.projects_container }>
        <Link to="/projects" className={ styles.link }>
          <TbArrowBack />
          Voltar
        </Link>
        <TableProjects />
      </section>
    </main>
  );
}
