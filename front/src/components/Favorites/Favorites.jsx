import styles from './Favorites.module.css';
import { connect } from 'react-redux';

export function Favorites(props) {
  return (
    <div className={styles.cards}>
      {props.myFavorites.map((fav) =>
        <div className={styles.card} >
          <div className={styles.card2}>
            <img className={styles.image} src={fav.image} alt={fav.name} />
            <div className={styles.name}>
              <h2>{fav.name} <br></br> Id:{fav.id}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  )
};

export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  }
}

export default connect(mapStateToProps, null)(Favorites);