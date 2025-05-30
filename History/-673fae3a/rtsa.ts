const form = document.querySelector('form') as HTMLFormElement;
const addressInput = document.getElementById('address') as HTMLInputElement;

const link = "https://nominatim.openstreetmap.org/search?city='Черкаси'";

async function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  const res = await fetch(link);
  const data = await res.json();
  console.log(data);
}

form.addEventListener('submit', searchAddressHandler);
