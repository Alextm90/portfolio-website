import styles from './Certificates.module.css';
import certificateOne from '../assets/certificateOne.png';
import certificateTwo from '../assets/certificateTwo.png';
import certificateThree from '../assets/certificateThree.png';
import certificateFour from '../assets/certificateFour.png';
import certificateFive from '../assets/certificateFive.png';
import Popup from 'reactjs-popup';
import CloseIcon from '@mui/icons-material/Close';

const Certificates = () => {
  const arr = [
    certificateOne,
    certificateTwo,
    certificateThree,
    certificateFour,
    certificateFive,
  ];

  const certificateComponents = arr?.map((cert) => {
    return (
      <Popup
        key={cert}
        trigger={
          <button className={styles.certBtn}>
            <img className={styles.certImg} src={cert} alt="Certificate" />
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '90vw',
              maxWidth: '90vw',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: '1rem',
            }}
            className={styles.gh}
          >
            <img
              className={styles.popup}
              src={cert}
              alt="Certificate Enlarged"
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
            <button onClick={() => close()} className={styles.closeBtn}>
              <CloseIcon />
            </button>
          </div>
        )}
      </Popup>
    );
  });

  return (
    <div id="certificates">
      <section id={styles.certWrapper}>
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
    </div>
  );
};

export default Certificates;
