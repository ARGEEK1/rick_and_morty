const validation = (inputs) => {
  let errors = {};
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!inputs.username) errors.username = 'Por favor, complete este campo';
  if (!regexEmail.test(inputs.username)) errors.username ='El nombre de usuario deb ser un Email valido';
  if (inputs.username.length > 35) errors.username = 'El email no puede superar los 35 caracteres';
  
};
