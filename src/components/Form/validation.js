export const validation = (inputs) => {
  let errors = {};
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

  if (!inputs.username) errors.username = 'Por favor, complete este campo';
  else if (!regexEmail.test(inputs.username)) errors.username ='El nombre de usuario deb ser un Email valido';
  else if (inputs.username.length > 35) errors.username = 'El email no puede superar los 35 caracteres';

  if (!inputs.password) errors.password = 'Por favor, es necesario la contraseña';
  else if (inputs.password.length < 6 || inputs.password.length > 10) errors.password = 'La contraseña debe tener una longitud entre 6 y 10 caracteres';
  else if (!regexPassword.test(inputs.password)) errors.password = 'La contraseña debe tener al menos un número';

  return errors;
};
