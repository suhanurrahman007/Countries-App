import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"

function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((country) => setCountries(country));
  },[])

  const [visit, setVisit] = useState([])
  const handleVisit = (country) =>{
    const newCountry = [...visit, country]
    setVisit(newCountry)
  }

  const [visitFlags, setVisitFlags] = useState([]);
  const handleVisitFlags = (flags) => {
    const newFlags = [...visitFlags, flags];
    setVisitFlags(newFlags);
  };


  return (
    <div>
      <h1>Country : {countries.length}</h1>
      <div>
        <h2>Visited Countries : {visit.length}</h2>
        <div className="country-li">
          {visit.map((country) => (
            <li className="li-s" key={country.ccn3}>
              {country.name.common}
            </li>
          ))}
        </div>
      </div>

      <div>
        <h2>Visited Flags : {visitFlags.length}</h2>
        <div className="flags-container">
          {visitFlags.map((flag, index) => (
            <img className="flags-img" key={index} src={flag} alt="" />
          ))}
        </div>
      </div>

      <div className="country-container">
        {countries.map((country, index) => (
          <Country
            key={index}
            country={country}
            handleVisit={handleVisit}
            handleVisitFlags={handleVisitFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
}
export default Countries;

