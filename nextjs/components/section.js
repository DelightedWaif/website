import styles from '../styles/section.module.css';

const Section = ({title, children}) => {
    return <div className={styles.Section}>
        <p className={styles.title}>
            {title}
        </p>
        {children}
    </div>
}

export default Section;
