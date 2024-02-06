import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const apiKey = "YOUR_API_KEY";

const OpencageMap = () => {
  const [location, setLocation] = useState("Type here");
  const defaultLocation = "default Location";
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await axios.get(
              `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&language=en&q=${latitude}+${longitude}`
            );
            console.log(response);
            const state = response.data.results[0].components.state;
            const country = response.data.results[0].components.country;
            const locationString = `${state}, ${country}`;

            setLocation(locationString || defaultLocation);
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
  }, []);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Navbar</span>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <input
            className="bg-white text-black py-2 px-4 rounded-lg focus:outline-none focus:bg-white focus:shadow-outline"
            type="text"
            placeholder={location}
            onChange={(e) => setLocation(e.target.value)}
            disabled
          />
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <BiChevronDown className="h-6 w-6" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default OpencageMap;
