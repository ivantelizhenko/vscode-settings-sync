import axios from 'axios';

const form = document.querySelector('form') as HTMLFormElement;
const addressInput = document.getElementById('address') as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value.trim();
  const url = `https://nominatim.openstreetmap.org/search?q=${enteredAddress}&format=json`;

  axios
    .get<[lon: number, lat: number]>(url)
    .then(response => {
      const { lat, lon }: { lat: number; lon: number } = response.data[0];
      console.log(lat, lon);
      console.log(response.data[0]);
      return [lat, lon];
    })
    .catch(error => console.log(error));
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
