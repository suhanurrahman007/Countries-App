import "./Country.css";
function Country({ country }) {
  const { name, population, area, flags } = country;

  return (
    <div className="country">
      <div>
        <img className="image" src={flags.png} alt="" />
        <h2>{name.common}</h2>
        <h4>{population}</h4>
        <p>{area}</p>
      </div>
    </div>
  );
}
export default Country;
