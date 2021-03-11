import '../styles.css';
import clsx from 'clsx';

function Header() {
  return (
    <div className="Header">
        <div className={clsx('nav')}>
            <div className={clsx('container')}>
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
