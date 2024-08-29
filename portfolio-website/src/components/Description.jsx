import { GithubOriginal } from 'devicons-react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Parallax } from 'react-scroll-parallax';
import styles from './Projects.module.css';

const ViewAppLink = ({ webLnk }) => {
  return (
    <a
      href={webLnk}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.lnk}
    >
      <span className={styles.eyeLnkIcon}>
        <VisibilityIcon style={{ fontSize: '15' }} />
      </span>
      <span className={styles.eyeLnkText}>Live App</span>
    </a>
  );
};

const Description = ({
  description,
  title,
  arr,
  showViewAppLink,
  webLnk,
  codeLnk,
}) => {
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
        <div className={styles.lnkContainer}>
          {showViewAppLink && <ViewAppLink webLnk={webLnk} />}
          <a
            className={styles.lnk}
            href={codeLnk}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.lnkIcon}>
              <GithubOriginal size="13" fill="gray" />
            </span>
            <span className={styles.lnkText}>View Code</span>
          </a>
        </div>
      </div>
    </Parallax>
  );
};

export default Description;
