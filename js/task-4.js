const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const formElem = event.currentTarget;
  const email = formElem.elements.email;
  const password = formElem.elements.password;

  if (email.value==="" || password.value==="") {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
    };

  console.log(formData);
  formElem.reset();
});
