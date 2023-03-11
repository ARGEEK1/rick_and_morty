import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addCharacter, deleteCharacter } from '../../redux/actions'

export function Card(props) {

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      props.deleteCharacter(props.id);
    };
    if (isFav === false) {
      setIsFav(true);
      props.addCharacter(props)
    }
  };

  return (
    <div className={styles.card} >
      <div className={styles.card2}>
        <button className={styles.button} onClick={() => props.onClose(props.id)}>Ｘ</button>
        {
          isFav ? (
            <button className={styles.button} onClick={handleFavorite}>❤️</button>
          ) : (
            <button className={styles.button} onClick={handleFavorite}>🤍</button>
          )
        }
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


export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addCharacter: (character) => {
      dispatch(addCharacter(character));
    },
    deleteCharacter: (id) => {
      dispatch(deleteCharacter(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

