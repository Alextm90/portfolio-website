import styles from './projects.module.css';
import project1 from '../assets/project1.png';
import project12 from '../assets/project12.png';
import project8 from '../assets/project9.png';
import Description from './Description';
import textObject from './text';

const Projects = () => {
  const { descriptionOne, descriptionTwo, descriptionThree, descriptionFour } =
    textObject;

  const arr = ['one', 'two', 'three', 'four'];
  const arrTwo = ['JavaScript', 'D3.js'];
  const arrThree = ['one', 'two', 'three', 'four', 'five'];

  return (
    <section id={styles.projects}>
      <h1 id="projects" style={{ marginBottom: '2rem' }}>Projects</h1>
      <div
        className={styles.projectContainer}
        style={{
          backgroundImage: `url(${project8})`,
        }}
      >
        <Description
          title="Issue Tracker"
          description={descriptionOne}
          arr={arrTwo}
          showViewAppLink={true}
          webLnk="https://my-frontend-jnhl.onrender.com/"
          codeLnk="https://github.com/Alextm90/issue-tracker"
        />
      </div>
      <div
        className={styles.projectContainer}
        style={{
          backgroundImage: `url(${project12})`,
        }}
      >
        <div id={styles.project12}>
          <Description
            title="Number Guessing Game"
            description={descriptionTwo}
            arr={arr}
            showViewAppLink={false}
            codeLnk="https://github.com/Alextm90/number-guessing-game"
          />
        </div>
      </div>
      <div
        className={styles.projectContainer}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.33), rgba(0, 0, 255, 0.33)), url(${project1})`,
        }}
      >
        <Description
          title="Timer"
          description={descriptionTwo}
          showViewAppLink={true}
          webLnk="https://alextm-25-5-clock.surge.sh/"
          codeLnk="https://github.com/Alextm90/pomodoro-timer"
          arr={arrThree}
        />
      </div>
    </section>
  );
};

export default Projects;
