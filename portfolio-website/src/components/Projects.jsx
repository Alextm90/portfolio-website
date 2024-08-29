import styles from './projects.module.css';
import project1 from '../assets/project1.png';
import project12 from '../assets/project12.png';
import project8 from '../assets/project8.png';
import Description from './Description';
import textObject from './text';

const Projects = () => {
  const { descriptionOne, descriptionTwo, descriptionThree, descriptionFour } =
    textObject;

  
  const arrOne = ['JS', 'React', 'MongoDB', 'Express', 'Node.js'];
  const arrTwo = ['PostgreSQL', 'Bash'];
  const arrThree = ['JS', 'React', 'HTML', 'CSS'];

  return (
    <section id={styles.projects}>
      <h1 id="projects" style={{ marginBottom: '2rem' }}>Projects</h1>
      <p style={{ padding: '0 0 1rem 1rem' }}>Please note: The Issue Tracker is hosted on Render.com's free tier, so it may take 1-2 minutes to start up.</p>
      <div
        className={styles.projectContainer}
        style={{
          backgroundImage: `url(${project8})`,
        }}
      >
        <Description
          title="Issue Tracker"
          description={descriptionOne}
          arr={arrOne}
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
            arr={arrTwo}
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
          description={descriptionThree}
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
