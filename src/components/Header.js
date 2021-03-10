import styles from '../styles.module.css';

function Header() {
  return (
    <div className="Header">
        <div className={styles.nav}>
            <div className={styles.container}>
                <ul>
                    <a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Projects">Projects</a>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Header;
