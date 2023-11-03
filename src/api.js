import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    units: "metric",
    lang: "kr",
    appid: "2704c57c90f97a5146b9971b0d8edaa8",
  },
});

export const getWeather = () => {
  const lat = 35.15817060271471;
  const lon = 129.05988719686576;
  return instance.get(`weather?lat=${lat}&lon=${lon}`);
};
