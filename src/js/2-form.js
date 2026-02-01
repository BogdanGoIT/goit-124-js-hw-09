const KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const formData = JSON.parse(localStorage.getItem(KEY)) ?? {
  email: '',
  message: '',
};

const { message, email } = formData;

form.elements.message.value = message;
form.elements.email.value = email;

formData.email = email;
formData.message = message;

form.addEventListener('input', inputClick);
form.addEventListener('submit', formSubmit);

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
    evt.target.reset();
    formData.email = '';
    formData.message = '';
  } else {
    alert('Fill please all fields');
  }
}
