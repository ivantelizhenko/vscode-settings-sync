const form = document.querySelector('form') as HTMLFormElement;
const addressInput = document.getElementById('address') as HTMLInputElement;

// `https://nominatim.openstreetmap.org/search?q=${encodeURI(enteredAddress)}&format=json`;

async function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${enteredAddress}`
  );

  const data = await res.json();
}

form.addEventListener('submit', searchAddressHandler);
