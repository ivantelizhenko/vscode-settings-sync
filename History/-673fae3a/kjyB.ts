const form = document.querySelector('form') as HTMLFormElement;
const addressInput = document.getElementById('address') as HTMLInputElement;

const link = 'https://nominatim.openstreetmap.org/search?city=';

async function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  const res = await fetch(link + enteredAddress);
  const data = await res.json();
  console.log(data);
}

form.addEventListener('submit', searchAddressHandler);
