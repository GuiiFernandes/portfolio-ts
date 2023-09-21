import { Link } from 'react-router-dom';

import styles from './MainProjects.module.css';
import Slide from '../../components/Slide';

export default function MainProjects() {
  return (
    <main className={ `page ${styles.projects} background-image` }>
      <Slide />
      <Link to="/projects/all" className={ styles.link }>
        <h2>MAIS PROJETOS</h2>
      </Link>
    </main>
  );
}
