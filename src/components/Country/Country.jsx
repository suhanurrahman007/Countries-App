import { useState } from "react";
import "./Country.css";
function Country({ country, handleVisit, handleVisitFlags }) {
  const { name, population, area, flags } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div>
      <div className={`country ${visited ? "visited" : "not-visited"}`}>
        <img className="image" src={flags.png} alt="" />
        <h2>{name.common}</h2>
        <h4>Population : {population}</h4>
        <p>Area : {area}</p>
        <div className="btn-s">
          <button onClick={handleVisited}>
            {visited ? "Visited" : "Going"}
          </button>
          <button onClick={() => handleVisit(country)}>Mark Visited</button>
          <button onClick={() => handleVisitFlags(country.flags.png)}>Visited Flags</button>
        </div>
        {visited ? `Visited ${name.common} Country` : "Not Visited"}
      </div>
    </div>
  );
}
export default Country;
