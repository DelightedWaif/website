import styles from '../styles/intro.module.css';
import ContactIcons from '../components/contactIcons';

const Intro = () => {
    return <div className={styles.Intro}>
        <p className={styles.heading} >
            Hi, I'm Tim and I like to <span>make things</span>
        </p>
        <p className={styles.subtitle} >
            I'm a <span>Full Stack Developer</span> that enjoys writing elegant, efficient code.
        </p>
        <p className={styles.subtitle} >
            Currently <span>available for hire.</span>
        </p>
        <ContactIcons />
    </div>
}

export default Intro;
