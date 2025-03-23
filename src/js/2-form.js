const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};
const savedData = JSON.parse(localStorage.getItem(localStorageKey));
if (savedData) {
  formData = savedData;
  form.elements.email.value = savedData.email;
  form.elements.message.value = savedData.message;
}

form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});
form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(localStorageKey);
  formData = { email: '', message: '' };
  form.reset();
});
