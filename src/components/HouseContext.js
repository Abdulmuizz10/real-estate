import React, { useState, useEffect, createContext, useContext } from "react";
import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [Loading, setLoading] = useState(false);
  // return all locations
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    // remove all duplicates
    const uniqueCountries = ["location (any)", ...new Set(allCountries)];
    // set countries slot
    setCountries(uniqueCountries);
  }, []);
  // return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // remove all duplicates
    const uniqueProperties = ["Properties (any)", ...new Set(allProperties)];

    // set properties slot
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);
    // create a function that checks if the string includes "(any)"
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    // get first value of price and parse it into number
    const minPrice = parseInt(price.split(" ")[0]);

    // get second value of price which is the maximum price & parse it to number
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // if all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      // if all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      // if country is not defualt
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.type === property;
      }

      // if property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.country === country;
      }

      // if price is not default
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      // if country is & property is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      // if country and price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      // if property and price is not default
      if (!isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
      newHouses.length < 1 ? setHouses([]) : setHouses(newHouses);
      setLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        setCountries,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        houses,
        Loading,
        handleClick,
        Loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
