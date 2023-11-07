import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    units: "metric",
    lang: "kr",
    appid: "2704c57c90f97a5146b9971b0d8edaa8",
  },
});

export const getWeather = ({ queryKey }) => {
  // console.log(queryKey);

  const [_, lat, lon] = queryKey;
  return instance
    .get(`weather?lat=${lat}&lon=${lon}`)
    .then((response) => response.data);
};
