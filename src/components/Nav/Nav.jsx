import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

function Nav(props) {
  const random = () => Math.floor(Math.random() * (826) + 1);
  
  return (
    <div>
      <header className={styles.header}>
        <nav>
          <div>
            <SearchBar onSearch={props.onSearch} />
          </div>
          <div>
            <button onClick={() => props.onSearch(random())}>Random</button>
          </div>
          <lu>
            <li>
              <Link to='/about'>ABOUT</Link>
            </li>
            <li>
            <Link to='/home'>HOME</Link>
            </li>
          </lu>
        </nav>
      </header>
    </div>
  );
};

export default Nav;