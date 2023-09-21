import { ProjectProps } from '../../types';
import styles from './ProjectCard.module.css';

function ProjectCard(
  { project: { title, id, gif, link, description, github, tags } } : ProjectProps,
) {
  return (
    <div className={ styles['project-card'] } key={ id }>
      <h3 className={ styles['card-title'] }>{ title }</h3>
      <img src={ gif } alt="gif-projeto" />
      <a href={ link } target="_blank" rel="noopener noreferrer">
        site
      </a>
      <div>
        <a href={ github } target="_blank" rel="noopener noreferrer">
          github
        </a>
      </div>
      <div>
        <p>{tags}</p>
      </div>
      <p className={ styles['card-description'] }>{ description }</p>
    </div>
  );
}

export default ProjectCard;
