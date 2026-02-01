const KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const formData = { email: '', message: '' };

const localeData = JSON.parse(localStorage.getItem(KEY)) ?? {};
localStorage.setItem(KEY, JSON.stringify(formData));

const { message, email } = localeData;

form.elements.message.value = message ?? '';
form.elements.email.value = email ?? '';

formData.email = email ?? '';
formData.message = message ?? '';

form.addEventListener('input', inputClick);
form.addEventListener('submit', formSubmit);

function inputClick(evt) {
  const { target } = evt;
  formData[target.name] = target.value.trim();
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
