import styles from '../styles/designs.module.css'
import musicDesign from '../assets/design4.jpg';
import bookCover from '../assets/design3.jpg';
import mediaCampaign from '../assets/design1.jpg';
import emailBlast from '../assets/design2.jpg';

export default function Designs() {
  return (
   
    <main className={styles.designsMain}>
        <>
        <h1 className={styles.designsTitle}>Design Proposals</h1>
        </>
      <section className={styles.sectionDesigns}>
       
            <br></br>
          <div>
          <img className={styles.musicDesign}
                src={musicDesign} from alt="music design" 
                />

          <img className={styles.bookCover}
                src={bookCover} from alt="music design" 
                />

          <img className={styles.mediaCampaign}
                src={mediaCampaign} from alt="music design" 
                />

          <img className={styles.emailBlast}
                src={emailBlast} from alt="music design" 
                />
          </div>
            <br></br>
       
      </section>
    </main>
  
  )
}