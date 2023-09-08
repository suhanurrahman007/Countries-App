import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import "./Country.css";

function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((country) => setCountries(country));
  },[])

  return (
    <div className="country-container">
      {countries.map((country) => (
        <Country country={country}></Country>
      ))}
    </div>
  );
}
export default Countries;
