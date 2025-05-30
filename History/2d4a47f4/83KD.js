import React, { useState } from 'react';

function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], '☀️'],
    [[1], '🌤'],
    [[2], '⛅️'],
    [[3], '☁️'],
    [[45, 48], '🌫'],
    [[51, 56, 61, 66, 80], '🌦'],
    [[53, 55, 63, 65, 57, 67, 81, 82], '🌧'],
    [[71, 73, 75, 77, 85, 86], '🌨'],
    [[95], '🌩'],
    [[96, 99], '⛈'],
  ]);
  const arr = [...icons.keys()].find(key => key.includes(wmoCode));
  if (!arr) return 'NOT FOUND';
  return icons.get(arr);
}

function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function formatDay(dateStr) {
  return new Intl.DateTimeFormat('en', {
    weekday: 'short',
  }).format(new Date(dateStr));
}

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState('LONDON');
  const [displayLocation, setDisplayLocation] = useState('');

  function handleChange(word) {
    setLocation(word);
    fetchWeather();
  }

  async function fetchWeather() {
    if (location.length <= 2) return setWeather({});
    try {
      setIsLoading(true);

      // 1) Getting location (geocoding)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results) throw new Error('Location not found');

      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);

      setDisplayLocation(`${name} ${convertToFlag(country_code)}`);

      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();

      setWeather(weatherData.daily);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="app">
      <h1>Classy weather</h1>
      <Input location={location} onChange={handleChange} />

      {isLoading && <p className="loader">Loading...</p>}
      {weather.weathercode && (
        <Weather weather={weather} location={displayLocation} />
      )}
    </div>

    //       <div className="app">
    //         <h1>Classy weather</h1>
    //         <Input
    //           location={this.state.location}
    //           onChangeLocation={this.setLocation}
    //         />

    //         {this.state.isLoading && <p className="loader">Loading...</p>}

    //         {this.state.weather.weathercode && (
    //           <Weather
    //             weather={this.state.weather}
    //             location={this.state.displayLocation}
    //           />
    //         )}
    //       </div>
  );
}

// class App extends React.Component {
//   state = {
//     location: '',
//     isLoading: false,
//     displayLocation: '',
//     weather: {},
//   };

//   // async fetchWeather() {
//   fetchWeather = async () => {
//     if (this.state.location.length < 2) return this.setState({ weather: {} });
//     try {
//       this.setState({
//         isLoading: true,
//       });

//       // 1) Getting location (geocoding)
//       const geoRes = await fetch(
//         `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
//       );
//       const geoData = await geoRes.json();

//       if (!geoData.results) throw new Error('Location not found');

//       const { latitude, longitude, timezone, name, country_code } =
//         geoData.results.at(0);
//       this.setState({
//         displayLocation: `${name} ${convertToFlag(country_code)}`,
//       });
//       // 2) Getting actual weather
//       const weatherRes = await fetch(
//         `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
//       );
//       const weatherData = await weatherRes.json();
//       this.setState({ weather: weatherData.daily });
//     } catch (err) {
//       console.error(err);
//     } finally {
//       this.setState({
//         isLoading: false,
//       });
//     }
//   };

//   setLocation = e => this.setState({ location: e.target.value });

//   //useEffect []
//   // componentDidMount() {
//   //   // this.fetchWeather();

//   //   this.setState({ location: localStorage.getItem('location') || '' });
//   // }

//   //useEffect [location]
//   // componentDidUpdate(prevProps, prevState) {
//   //   if (this.state.location !== prevState.location) {
//   //     this.fetchWeather();

//   //     localStorage.setItem('location', this.state.location);
//   //   }
//   // }

//   render() {
//     return (
//       <div className="app">
//         <h1>Classy weather</h1>
//         <Input
//           location={this.state.location}
//           onChangeLocation={this.setLocation}
//         />

//         {this.state.isLoading && <p className="loader">Loading...</p>}

//         {this.state.weather.weathercode && (
//           <Weather
//             weather={this.state.weather}
//             location={this.state.displayLocation}
//           />
//         )}
//       </div>
//     );
//   }
// }

function Input({ location, onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search from location..."
        value={location}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}

function Weather({ weather, location }) {
  const {
    temperature_2m_max: max,
    temperature_2m_min: min,
    time: dates,
    weathercode: codes,
  } = weather;
  // const {
  //   temperature_2m_max: max,
  //   temperature_2m_min: min,
  //   time: dates,
  //   weathercode: codes,
  // } = weather;

  return (
    <div>
      <h2>Weather {location}</h2>
      <ul className="weather">
        {dates.map((date, i) => (
          <Day
            date={date}
            max={max.at(i)}
            min={min.at(i)}
            code={codes.at(i)}
            key={date}
            isToday={i === 0}
          />
        ))}
      </ul>
    </div>
  );
}

function Day(date, max, min, code, isToday) {
  return (
    <li className="day">
      <span>{getWeatherIcon(code)}</span>
      <p>{isToday ? 'Today' : formatDay(date)}</p>
      <p>
        {Math.floor(min)}&deg; &mdash; <strong> {Math.ceil(max)}&deg; </strong>
      </p>
    </li>
  );
}
