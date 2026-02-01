const KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', inputClick);
form.addEventListener('submit', formSubmit);

const formData = { email: '', message: '' };

const localeData = JSON.parse(localStorage.getItem(KEY)) ?? {};

const { message, email } = localeData;

form.elements.message.value = message ?? '';
form.elements.email.value = email ?? '';

formData.email = email;
formData.message = message;

function inputClick(evt) {
  const { target } = evt;
  formData[target.name] = target.value.trim();

  localStorage.setItem(KEY, JSON.stringify(formData));
}

function formSubmit(evt) {
  evt.preventDefault();

  if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeItem(KEY);
    form.reset();
  } else {
    console.log('Fill please all fields');
  }
}
