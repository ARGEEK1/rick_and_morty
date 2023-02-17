import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className={style.cards}>
      {characters.map((char,index) =>
        <Card
          key={index}
          id={char.id}
          onClose={onClose}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
        />
      )};
    </div>
  );
};
