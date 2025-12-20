const selectBtn1 = document.querySelector('#currency-first');
const selectBtn2 = document.querySelector('#currency-second');

const input1 = document.querySelector('#worth-first');
const input2 = document.querySelector('#worth-second');

const exchangeRateEl = document.querySelector('#exchange-rate');


const API_KEY = "YOUR_API_KEY_HERE";

updateRate();

function updateRate() {
  
  if (API_KEY === "YOUR_API_KEY_HERE") {
    exchangeRateEl.innerText = "Please add your own API key to use this app.";
    return;
  }

  fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${selectBtn1.value}`)
    .then((res) => res.json())
    .then((data) => {
      if (!data.conversion_rates) {
        exchangeRateEl.innerText = "Error fetching exchange rates.";
        return;
      }
      const rate = data.conversion_rates[selectBtn2.value];
      exchangeRateEl.innerText = `1 ${selectBtn1.value} = ${rate} ${selectBtn2.value}`;
      input2.value = (rate * input1.value).toFixed(3);
    })
    .catch(() => {
      exchangeRateEl.innerText = "Error fetching exchange rates.";
    });
}

selectBtn1.addEventListener('change', updateRate);
selectBtn2.addEventListener('change', updateRate);
input1.addEventListener('input', updateRate);
