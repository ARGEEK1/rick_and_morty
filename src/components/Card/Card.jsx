import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (

    <div className={styles.card}>
      <div className={styles.card2}>
        <button className={styles.button} onClick={() => props.onClose(props.id)}>Ｘ</button>
        <img className={styles.image} src={props.image} alt={props.name} />
        <Link className={styles.link} to={`/detail/${props.id}`} >
          <div className={styles.name}>
            <h2>{props.name}</h2>
          </div>
        </Link>
        <div className={styles.info}>
          <h2>{props.species}</h2>
          <h2>{props.gender}</h2>
        </div>
      </div>
    </div>

  );
};

