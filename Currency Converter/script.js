const selectBtn1 = document.querySelector('#currency-first');
const selectBtn2 = document.querySelector('#currency-second');

const input1 = document.querySelector('#worth-first');
const input2 = document.querySelector('#worth-second');

const exchangeRateEl = document.querySelector('#exchange-rate');

updateRate();

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/f101f22b19c64a96ec9d1afd/latest/${selectBtn1.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[selectBtn2.value];
      console.log(rate);
      exchangeRateEl.innerText = `1 ${selectBtn1.value} = ${
        rate + ' ' + selectBtn2.value
      }`;
      input2.value = (rate * input1.value).toFixed(3);
    });
}

selectBtn1.addEventListener('change', updateRate);

selectBtn2.addEventListener('change', updateRate);

input1.addEventListener('input', updateRate);
