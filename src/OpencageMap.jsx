import React, { useEffect } from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_OPENCAGE_API_KEY;

useEffect(() => {
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await axios.get(
              `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&language=en&q=${latitude}+${longitude}`
            );

            const state = response.data.results[0].components.state;
            setLocation(state || defaultLocation);
          } catch (error) {
            console.error("Error getting user location:", error);
            setLocation(defaultLocation);
          }
        },
        (error) => {
          console.error("Error getting user location:", error);
          setLocation(defaultLocation);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
      setLocation(defaultLocation);
    }
  };

  getUserLocation();
}, [defaultLocation]);

const OpencageMap = () => {
  return <div>OpencageMap</div>;
};

export default OpencageMap;
