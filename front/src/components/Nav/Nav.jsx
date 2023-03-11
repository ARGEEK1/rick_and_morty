import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

function Nav(props) {
  const random = () => Math.floor(Math.random() * (826) + 1);

  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to='/home' className={styles.navlink}><img className={styles.logo} src='/images/logo.png' alt="logo" /></Link>
          <div className={styles.search}>
            <SearchBar onSearch={props.onSearch} />
          </div>
          <div>
            <button className={styles.navBtn} id={styles.navBtnR} onClick={() => props.onSearch(random())}>Random</button>
          </div>
          <Link to='/about'><button className={styles.navBtn}>About</button></Link>
          <Link to='/home'><button className={styles.navBtn}>Home</button></Link>
          <button onClick={props.logout} className={styles.navBtn} id={styles.navBtnL}>Logout</button>
        </nav>
      </header>
    </div>
  );
};

export default Nav;