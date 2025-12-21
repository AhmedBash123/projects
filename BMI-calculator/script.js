const btnEl = document.getElementById('btn');
const bmiInputEl = document.getElementById('bmi-result');
const lastMessage = document.getElementById('weight-condition');

function calculateBMI() {
  const heightValue = document.getElementById('height').value / 100;
  const weightValue = document.getElementById('weight').value;

  const bmiValue = weightValue / (heightValue * heightValue);
  bmiInputEl.value = bmiValue.toFixed(3);

  if (bmiValue < 18.5) {
    lastMessage.innerText = 'Under Weight';
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    lastMessage.innerText = 'Normal Weight';
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    lastMessage.innerText = 'Over Weight';
  } else if (bmiValue >= 30) {
    lastMessage.innerText = 'Obecity';
  }
}

btnEl.addEventListener('click', calculateBMI);
