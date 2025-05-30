'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

//////////////////////////////////////
// Our First AJAX Call" XMLHttpRequest

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    // Render country 1
    renderCountry(data);

    // Get neighbour country 2
    const neighbour = data.borders?.[0];

    if (!neighbour) return;
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);

      // Render country 2
      renderCountry(data, 'neighbour');
    });
  });
};
// getCountryAndNeighbour('ukraine');

//Promises
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// };

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(err);
//       renderError(`Something went wrong ${err.message}! Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found.'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      renderError(`Something went wrong! ${err.message} Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getCountryData('eesti');
// });
// getCountryData('australia');

///////////////////////////////////////
//Coding challenge 1
/*
const error = function (err) {
  countriesContainer.insertAdjacentText('beforeend', err);
};

const renderCountry2 = function (data, className = '') {
  fetch(`https://restcountries.com/v3.1/name/${data.countryName}`)
    .then(response => response.json())
    .then(dataNew => {
      const data = dataNew[0];
      const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${
            Object.values(data.languages)[0]
          }</p>
          <p class="country__row"><span>💰</span>${
            Object.values(data.currencies)[0].name
          }</p>
        </div>
      </article>
      `;
      countriesContainer.insertAdjacentHTML('beforeend', html);
    });
};

const whereAmI = function (lat, lng) {
  getPosition()
    .then(pos => {
      console.log(pos.coords);
      const { latitude: lat, longitude: lng } = pos.coords;
      console.log(lat, lng);
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Something went wrong! Error: ${response.status}`);
      return response.json();
    })
    .then(data => {
      renderCountry2(data);
      console.log(`You are in ${data.city}, ${data.countryName}.`);
    })
    .catch(err => `${error(`Failed to connection. Try again!`)}!`)
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', function () {
  // whereAmI('52.508', '13.381');
  // whereAmI('19.037', '72.873');
  //whereAmI(-33.933, 18.474);
  whereAmI();
});
*/

///////////////////////////////////////
//Promise
/*
const lat = '52.508';
const lng = '13.381';

console.log('Test start');

setTimeout(() => {
  console.log('0 sec timer');
}, 0);

Promise.resolve('Resolve promise 1').then(res => console.log(res));

Promise.resolve('Resolve promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log('Test end');
*/

// const lotteryPromise = new Promise(function (resolve, reject) {
//   //anyway happens
//   console.log('Lotter draw is happening 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💰');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// this isn't callback hell
// wait(1)
//   .then(res => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(res => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(res => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(res => {
//     console.log('4 second passed');
//     return wait(1);
//   });

// callback hell
// setTimeout(function () {
//   console.log('1 second passed');
//   setTimeout(function () {
//     console.log('2 second passed');
//     setTimeout(function () {
//       console.log('3 second passed');
//       setTimeout(function () {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem')).catch(x => console.error(x));

// Promisifying the Geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

/*

const get3Countries = async function (c1, c2, c3) {
  try {
    //////////////////////////////////////////////
    //They are the same
    // Do in a row
    const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    console.log([...data1.capital, ...data2.capital, ...data3.capital]);

    //Do in parallel each other
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.flatMap(d => d[0].capital));
    //////////////////////////////////////////////
  } catch (err) {
    console.log(err);
  }
};
get3Countries('ukraine', 'german', 'poland');
*/

/*
//Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0].name.common);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/ukraine`),
  timeout(1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

//Promise.any [ES2021]
Promise.any([
  Promise.reject('Error'),
  Promise.resolve('Success'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
*/

//Coding Challenge 2
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImg = function (imgPath, className = 'empty') {
  return new Promise(function (response, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.classList.add(`${className}`);
    img.addEventListener('load', function () {
      imgContainer.append(img);
      return response(img);
    });
    img.addEventListener('error', function () {
      return reject(new Error('Photo not found'));
    });
  });
};
/*
let currentImg;
createImg('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Photo 1 loaded');
    return wait(0.5);
  })
  .then(img => {
    currentImg.style.display = 'none';
    currentImg.src = 'img/img-2.jpg';
    return wait(0.5);
  })
  .then(() => {
    currentImg.style.display = 'block';
    console.log('Photo 2 loaded');
    return wait(0.5);
  })
  .then(() => {
    currentImg.style.display = 'none';
    currentImg.src = 'img/img-3.jpg';
    return wait(0.5);
  })
  .then(() => {
    currentImg.style.display = 'block';
    console.log('Photo 3 loaded');
    return wait(0.5);
  })
  .then(() => {
    currentImg.style.display = 'none';
    console.log('You WIN!');
    return wait(0.5);
  })
  .catch(err => console.error('Something went wrong'));

*/
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// createImg('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Photo 1 loaded');
//     return wait(0.5);
//   })
//   .then(img => {
//     currentImg.style.display = 'none';
//     currentImg.src = 'img/img-2.jpg';
//     return wait(0.5);
//   })
//   .then(() => {
//     currentImg.style.display = 'block';
//     console.log('Photo 2 loaded');
//     return wait(0.5);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     currentImg.src = 'img/img-3.jpg';
//     return wait(0.5);
//   })
//   .then(() => {
//     currentImg.style.display = 'block';
//     console.log('Photo 3 loaded');
//     return wait(0.5);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     console.log('You WIN!');
//     return wait(0.5);
//   })
//   .catch(err => console.error('Something went wrong'));

const loadNPause = async function () {
  try {
    //first photo
    let img = await createImg('img/img-1.jpg');
    console.log('Photo 1 loaded');
    let waiting = await wait(2);
    //white space
    img.style.display = 'none';
    waiting = await wait(2);
    //second space
    img = await createImg('img/img-2.jpg');
    console.log('Photo 2 loaded');
    img.style.display = 'block';
    waiting = await wait(2);
    //white space
    img.style.display = 'none';
    waiting = await wait(2);
    //third space
    img = await createImg('img/img-3.jpg');
    console.log('Photo 3 loaded');
    img.style.display = 'block';
    waiting = await wait(2);
    //white space
    console.log('end');
    img.style.display = 'none';
  } catch (err) {
    console.error(new Error(err.message));
  }
};
// loadNPause();

const testData = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

const loadAll = function (data) {
  const arr = data;
  const imgs = [];
  arr.map(d => {
    createImg(d, 'parallel').then(async img => {
      console.log(img);
      const x = await imgs.push(img);
    });
  });
  imgs.forEach(async img => {
    const x = await imgs.push('img');
  });
  console.log(imgs);
};
loadAll(testData);
