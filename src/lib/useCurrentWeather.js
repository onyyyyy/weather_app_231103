import { useEffect, useState } from "react";

export const useCurrentWeather = () => {
  const defaultLat = 35.15817060271471;
  const defaultLon = 129.05988719686576;
  const [lat, setLat] = useState(defaultLat);
  const [lon, setLon] = useState(defaultLon);

  const location = (pos) => {
    const {
      coords: { latitude, longitude },
    } = pos;

    setLat(latitude);
    setLon(longitude);
  };

  // console.log(lat, lon);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
    // =>현재위치 기반으로 위도, 경도 값을 가져옴
  }, [lat, lon]);
  return {
    lat,
    lon,
  };
};
