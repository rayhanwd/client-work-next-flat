import { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import ArrowDown from "@/app/icons/ArrowDown";
import useToggle from "@/hooks/useToggle";

const CountrySelect: React.FC = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<any | null>(null);

  const [state, toggle] = useToggle(false);

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

  const handleSelectCountry = (e: React.MouseEvent<HTMLLIElement>) => {
    const selected = countries.find(
      (country) => country.name.common === e.currentTarget.dataset.value
    );
    setSelectedCountry(selected || null);
    toggle();
  };

  return (
    <div className="relative inline-block text-left mr-[23.25px]">
      <div className="relative">
        {selectedCountry && (
          <div>
            <Image
              src={selectedCountry.flags.png}
              alt={selectedCountry.name.common}
              width={43.643}
              height={32.725}
              className="rounded-full"
            />
          </div>
        )}
        <span className="absolute right-0 bottom-[-9.83px] bg-[#D9D9D9] rounded-full" onClick={toggle}>
          <ArrowDown width={27.023} height={20.263} />
        </span>
      </div>
      <div
        className={`absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg  ${
          state ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul className="py-1 h-[150px] overflow-hidden overflow-y-auto">
          {countries.map((country, index) => (
            <li
              className="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
              key={index}
              onClick={handleSelectCountry}
              data-value={country.name.common}
            >
              <span className="flex flex-col">
                <span>{country.name.common}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountrySelect;
