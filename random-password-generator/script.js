const generateBtn = document.querySelector('.btn');
const inputEl = document.querySelector('.input');
const copyEl = document.querySelector('.fa-copy');
const alertContainer = document.querySelector('.alert-container');

generateBtn.addEventListener('click', () => {
  createPassword();
});

copyEl.addEventListener('click', () => {
  copyPassword();
  if (inputEl.value) {
    alertContainer.classList.remove('active');
    setTimeout(() => {
      alertContainer.classList.add('active');
    }, 3000);
  }
});

function createPassword() {
  const chars =
    '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const passwordLength = 14;
  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }

  inputEl.value = `${password}`;
  alertContainer.innerText = 'Password copied!';
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
}
