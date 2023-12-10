import styles from "./projects.module.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import Description from "./Description";
import textObject from "./text";

const Projects = () => {
  const { descriptionOne, descriptionTwo, descriptionThree, descriptionFour } = textObject;
  
  const arr = ["one", "two", "three", "four"]
  const arrTwo = ["one", "two", "three"];

  return (
    <section id={styles.projects}>
      <h1>Projects</h1>
      <div
        className={styles.projectContainer}
        style={{
          backgroundImage: `url(${project1})`,
        }}
      >
        <Description
          title="Issue Tracker"
          description={descriptionOne}
          arr={arr}
        />
      </div>
      <div
        className={styles.projectContainer}
        style={{
          backgroundImage: `url(${project2})`,
        }}
      >
        <Description title="Heat Map" description={descriptionTwo} arr={arrTwo} />
      </div>
      <div
        className={styles.projectContainer}
        style={{
          backgroundImage: `url(${project1})`,
        }}
      >
        <Description title="Timer" description={descriptionThree} />
      </div>
    </section>
  );
};

export default Projects;
