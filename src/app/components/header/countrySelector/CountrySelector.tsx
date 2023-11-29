import { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";

const CountrySelect: React.FC = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<any | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data: any[] = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const response = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
              );
              const data = await response.json();
              const countryName = data.countryName;
              const userCountry = countries.find(
                (country) => country.name.common === countryName
              );
              setSelectedCountry(userCountry || null);
            } catch (error) {
              console.error("Error fetching user's location:", error);
            }
          },
          (error) => {
            console.error("Error getting user's location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getUserLocation();
  }, [countries]);

  const handleSelectCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = countries.find(
      (country) => country.name.common === e.target.value
    );
    setSelectedCountry(selected || null);
  };

  return (
    <div>
      {selectedCountry ? (
        <div>
          <Image
            src={selectedCountry.flags.png}
            alt={selectedCountry.name}
            width={20}
            height={20}
          />
        </div>
      ) : (
        <select onChange={handleSelectCountry}>
          
          <option value="">Select a country</option>
          {countries.map((country, index) => (
            <option key={index} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CountrySelect;
