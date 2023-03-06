
export const sofiaDefaultCoordinates = {
        latitude: '42.6860826',
        longitude: '23.3511934'
}

export const mock =       

{
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1661871600,
      main: {
        temp: 296.76,
        feels_like: 296.98,
        temp_min: 296.76,
        temp_max: 297.87,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 933,
        humidity: 69,
        temp_kf: -1.11
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 0.62,
        deg: 349,
        gust: 1.18
      },
      visibility: 10000,
      pop: 0.32,
//       rain: {
//         3h: 0.26
//       },
      sys: {
        pod: "d"
      },
      dt_txt: "2022-08-30 15:00:00"
    },
    {
      dt: 1661882400,
      main: {
        temp: 295.45,
        feels_like: 295.59,
        temp_min: 292.84,
        temp_max: 295.45,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 931,
        humidity: 71,
        temp_kf: 2.61
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 96
      },
      wind: {
        speed: 1.97,
        deg: 157,
        gust: 3.39
      },
      visibility: 10000,
      pop: 0.33,
//       rain: {
//         '3h': 0.57
//       },
      sys: {
        pod: "n"
      },
      dt_txt: "2022-08-30 18:00:00"
    }
  ],
  city: {
    id: 3163858,
    name: "Zocca",
    coord: {
      lat: 44.34,
      lon: 10.99
    },
    country: "IT",
    population: 4593,
    timezone: 7200,
    sunrise: 1661834187,
    sunset: 1661882248
  }
};
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1ba47edd47msh0a8302729e78991p1a91dejsn9fa855794eaa",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const API_URL = 'https://api.openweathermap.org/data/2.5'
export const API_KEY = 'b006536bc10ae1818f67ef81dd4e9ad0'

export const getWeather = (data) => {
  return data.list[0].weather[0].main;
}
