import styles from './project.module.css';

/* eslint-disable-next-line */
export interface ProjectProps {
  name: string;
}

export function Project(props: ProjectProps) {
  return (
    <div className={styles['container']}>
      <h2 className={styles['component-name']}>Example Component Name</h2>
      <p className={styles['component-description']}>
        This is an example component description.
      </p>
    </div>
  );
}

export default Project;
