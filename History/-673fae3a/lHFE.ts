const form = document.querySelector('form') as HTMLFormElement;
const addressInput = document.getElementById('address') as HTMLInputElement;

// `https://nominatim.openstreetmap.org/search?q=${encodeURI(enteredAddress)}&format=json`;

async function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value.trim();

  if (!enteredAddress) throw console.log("Input shouldn't be empty ");
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${enteredAddress}&format=json`
  );

  const data = await res.json();
  console.log(data[0]);
}

form.addEventListener('submit', searchAddressHandler);
