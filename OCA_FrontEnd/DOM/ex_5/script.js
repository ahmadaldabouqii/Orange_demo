'use strict';

const password = document.querySelector('#password');
const error_field_1 = document.querySelector('.error_field_1');
const repeatPassword = document.querySelector('#repeatPass');
const error_field_2 = document.querySelector('.error_field_2');
const submitBtn = document.querySelector('#submit');

password.addEventListener('keyup', () => {
  if (
    password.value.length < 6 &&
    !password.length !== repeatPassword.length &&
    password.value !== repeatPassword.value &&
    password.value.length !== repeatPassword.value.length
  ) {
    showError(error_field_1);
  } else {
    error_field_1.style.display = 'none';
  }
  if (
    password.value.length === repeatPassword.value.length &&
    password.value === repeatPassword.value &&
    password.value.length !== 0 &&
    repeatPassword.value.length !== 0
  )
    submitBtn.style.display = 'block';
});

repeatPassword.addEventListener('keyup', () => {
  if (
    repeatPassword.value.length > 0 &&
    !repeatPassword.length !== password.length &&
    repeatPassword.value !== password.value &&
    repeatPassword.value.length !== password.value.length
  ) {
    showError(error_field_2);
  } else {
    error_field_2.style.display = 'none';
  }
  if (
    repeatPassword.value.length === password.value.length &&
    repeatPassword.value === password.value &&
    repeatPassword.value.length !== 0 &&
    password.value.length !== 0
  )
    submitBtn.style.display = 'block';
});

function showError(err) {
  err.style.display = 'inline';
  submitBtn.style.display = 'none';
}
