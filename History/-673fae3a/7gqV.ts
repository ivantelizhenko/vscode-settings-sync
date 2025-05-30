const form = document.querySelector('form') as HTMLFormElement;
const addressInput = document.getElementById('address') as HTMLInputElement;

// `https://nominatim.openstreetmap.org/search?q=${encodeURI(enteredAddress)}&format=json`;

async function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${enteredAddress}&format=json`
    // { mode: 'no-cors' }
  );
  console.log(res);

  const data = await res.json();
  // console.log(data);
}

form.addEventListener('submit', searchAddressHandler);
