import styles from "./projects.module.css";
import { GithubOriginal } from "devicons-react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Parallax } from "react-scroll-parallax";

const Description = ({ description, title, arr }) => {

  return (
    <Parallax speed={-7}>
      <div className={styles.descriptionContainer}>
        <div className={styles.innerContainer}>
          <h2>{title}</h2>
          <div id={styles.techContainer}>
            {arr?.map((el) => {
              return (
                <span className={styles.languages} key={el}>
                  {el}
                </span>
              );
            })}
          </div>
          <p id={styles.description}>{description}</p>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.btn}>
            <span className={styles.eyeBtnIcon}>
              <VisibilityIcon style={{ fontSize: "small" }} />
            </span>
            <span className={styles.eyeBtnText}>Live App</span>
          </button>
          <button className={styles.btn}>
            <span className={styles.btnIcon}>
              <GithubOriginal size="10" fill="gray" />
            </span>
            <span className={styles.btnText}>View Code</span>
          </button>
        </div>
      </div>
    </Parallax>
  );
};

export default Description;
