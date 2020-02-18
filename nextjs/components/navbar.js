import styles from '../styles/navbar.module.css';

const NavBar = props => {
    const scrollTo = place => {
        if (place == 'about') {
            window.scrollTo(0, 100);
        }
        else if (place == 'work') {
            window.scrollTo(0, 750);
        }
        else if (place == 'projects') {
            window.scrollTo(0, 2050);
        }
    }

    return (
        <div className={styles.NavBar}>
            <p onClick={() => scrollTo("about")}>ABOUT</p>
            <p onClick={() => scrollTo("work")}>WORK</p>
            <p onClick={() => scrollTo("projects")}>PROJECTS</p>
        </div>
    )
}

export default NavBar;
