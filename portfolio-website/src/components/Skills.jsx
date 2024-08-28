import styles from "./Skills.module.css";
import {
  MongodbOriginal,
  ExpressOriginal,
  JavascriptOriginal,
  PostgresqlOriginal,
  NodejsOriginal,
  Html5Original,
  ReactOriginal,
  D3jsOriginal,
  MochaPlain,
  GitOriginal,
  VscodePlainWordmark,
  BashOriginal,
  GithubOriginal,
  Css3Original,
} from "devicons-react";

const Skills = () => {
  return (
    <section>
      <h1>Skills</h1>
      <div className={styles.skillContainer}>
        <div className={styles.icon}>
          <MongodbOriginal size="68" />
          <div className={styles.shadow}></div>
          <h4>mongoDB</h4>
        </div>
        <div className={styles.icon}>
          <ExpressOriginal size="68" fill="gray" />
          <div className={styles.shadow}></div>
          <h4>Express</h4>
        </div>
        <div className={styles.icon}>
          <JavascriptOriginal size="68" />
          <div className={styles.shadow}></div>
          <h4>JavaScript</h4>
        </div>
        <div className={styles.icon}>
          <PostgresqlOriginal size="68" />
          <div className={styles.shadow}></div>
          <h4>PostgreSQL</h4>
        </div>
        <div className={styles.icon}>
          <NodejsOriginal size="68" />
          <div className={styles.shadow}></div>
          <h4>Node.js</h4>
        </div>
        <div className={styles.icon}>
          <Html5Original size="68" />
          <div className={styles.shadow}></div>
          <h4>HTML5</h4>
        </div>
        <div className={styles.icon}>
          <ReactOriginal size="68" />
          <div className={styles.shadow}></div>
          <h4>React</h4>
        </div>
        <div className={styles.icon}>
          <Css3Original size="68" fill="gray" />
          <div className={styles.shadow}></div>
          <h4>CSS3</h4>
        </div>
        <div className={styles.icon}>
          <D3jsOriginal size="68" />
          <div className={styles.shadow}></div>
          <h4>D3.js</h4>
        </div>
        <div className={styles.icon}>
          <MochaPlain size="68" />
          <div className={styles.shadow}></div>
          <h4>Mocha</h4>
        </div>
      </div>
      <h1 id={styles.skills}>Tech</h1>
      <div className={styles.skillContainer}>
        <div className={styles.icon}>
          <GitOriginal size="68" />
          <div className={styles.shadow}></div>
          <h4>Git</h4>
        </div>
        <div className={styles.icon}>
          <VscodePlainWordmark size="68" fill="gray" />
          <div className={styles.shadow}></div>
          <h4>Vscode</h4>
        </div>
        <div className={styles.icon}>
          <BashOriginal size="68" />
          <div className={styles.shadow}></div>
          <h4>Bash</h4>
        </div>
        <div className={styles.icon}>
          <GithubOriginal size="68" color="red" />
          <div className={styles.shadow}></div>
          <h4>GitHub</h4>
        </div>
      </div>
    </section>
  );
};

export default Skills;
