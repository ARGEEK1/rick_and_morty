import styles from './Form.module.css';
import { useState } from 'react';
import { validation } from './validation';

export default function Form() {
  const [userData, setUserData] = useState({ username: '', password: ''});
  const [errors, setEroors] = useState({username:'', password:''});

  const handleInputChange = (e) => {

    setEroors(
      validation({
        ...userData,
        [e.target.name] : e.target.value
      })
    );

    setUserData({
      ...userData,
      [e.target.name] : e.target.value
    });

  }

  return (
    <div className={styles.form}>
      <form>
        <div className={styles.user}>
          <label htmlFor='username'>Username: </label>
          <input name='username' type='text' value={userData.username} onChange={handleInputChange}></input>
        </div>
        {!errors.username ? null : <p className={styles.errors}>{errors.username}</p>}
        <div className={styles.password}>
          <label htmlFor='password'>Password: </label>
          <input name='password' type='password' value={userData.password} onChange={handleInputChange}></input>
        </div>
        {!errors.password ? null : <p className={styles.errors}>{errors.password}</p>}
        <div className={styles.submit}>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
};