import styles from './Form.module.css';
import { useState } from 'react';

export default function Form() {
  const [userData, setUserData] = useState({ username: '', password: ''});
  const [errors, setEroors] = useState({username:'', password:''});

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name] : e.target.value
    });
    console.log(e.target.value)
  }

  return (
    <div className={styles.form}>
      <form>
        <div className={styles.user}>
          <label htmlFor='username'>Username: </label>
          <input name='username' type='text' value={userData.username} onChange={handleInputChange}></input>
        </div>
        <div className={styles.password}>
          <label htmlFor='password'>Password: </label>
          <input name='password' type='password' value={userData.password} onChange={handleInputChange}></input>
        </div>
        <div className={styles.submit}>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
};