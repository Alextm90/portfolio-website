import styles from "./Certificates.module.css";
import certificateOne from "../assets/certificateOne.png";
import certificateTwo from "../assets/certificateTwo.png";
import certificateThree from "../assets/certificateThree.png";
import certificateFour from "../assets/certificateFour.png";
import certificateFive from "../assets/certificateFive.png";
import Popup from "reactjs-popup";
import CloseIcon from "@mui/icons-material/Close";

const Certificates = () => {
  const arr = [
    certificateOne,
    certificateTwo,
    certificateThree,
    certificateFour,
    certificateFive,
  ];

  const certificateComponents = arr?.map((cert) => {
    return <Popup
        key={cert}
        trigger={
          <button className={styles.certBtn}>
            <img className={styles.certImg} src={cert}></img>
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div>
            <button className={styles.certBtn}>
              <img className={styles.popup} src={cert}></img>
            </button>
            <button onClick={() => close()} className={styles.closeBtn}>
              <CloseIcon />
            </button>
          </div>
        )}
      </Popup>
  });

  return (
    <section id={styles.certWrapper} >
      <h1 id={styles.header}>Certificates</h1>
      <div id={styles.certContainerOne}>
        {certificateComponents[0]}
        {certificateComponents[1]}
        {certificateComponents[2]}
      </div>
      <div id={styles.certContainerTwo}>
        {certificateComponents[3]}
        {certificateComponents[4]}
      </div>
    </section>
  );
};

export default Certificates;
