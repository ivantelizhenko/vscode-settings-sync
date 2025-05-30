const axios = require('axios');

const form = document.querySelector('form') as HTMLFormElement;
const addressInput = document.getElementById('address') as HTMLInputElement;

const url = `https://nominatim.openstreetmap.org/search?q=${enteredAddress}&format=json`;

async function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value.trim();

  // if (enteredAddress) {
  //   const res = await fetch(
  //     `https://nominatim.openstreetmap.org/search?q=${enteredAddress}&format=json`
  //   );

  //   if (!res.ok) throw console.log('Fetch was failed');
  //   const data = await res.json();
  //   console.log(data[0]);
  // }
}

form.addEventListener('submit', searchAddressHandler);
