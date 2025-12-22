const container = document.querySelector('.container');
const clickBtn = document.querySelector('.btn');
const popupContainer = document.querySelector('.popup-container');
const closeBtn = document.getElementById('close');
const joinBtn = document.querySelector('.popup-btn');

function popup() {
  container.classList.add('active');
  popupContainer.classList.remove('active');
}

function closePopup() {
  popupContainer.classList.add('active');
  container.classList.remove('active');
}

clickBtn.addEventListener('click', popup);
closeBtn.addEventListener('click', closePopup);

