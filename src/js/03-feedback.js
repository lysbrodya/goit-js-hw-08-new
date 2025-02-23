const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const FEEDBACK_FORM = FEEDBACK_FORM;

const objForm = {
  email: '',
  message: '',
};

const objFromLS = JSON.parse(localStorage.getItem(FEEDBACK_FORM));

if (localStorage.getItem(FEEDBACK_FORM)) {
  formEl.elements.email.value = objFromLS.email;

  formEl.elements.message.value = objFromLS.message;
}

formEl.addEventListener('input', throttle(setObjectFormOnLS, 500));

function setObjectFormOnLS(e) {
  objForm.email = formEl.elements.email.value;
  objForm.message = formEl.elements.message.value;
  objForm[e.target.name] = e.target.value;

  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(objForm));
}

formEl.addEventListener('submit', e => {
  e.preventDefault();
  formEl.reset();
  localStorage.removeItem(FEEDBACK_FORM);
});
