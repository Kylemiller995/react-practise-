import React from 'react';

const CountrySelector = (props) => {

  const options = props.countries.map((country, index)=>{
    return <option value={index} key={index}>{country.name}</option>
  })

  function handleChange(event){
    props.selectCountry(event.target.value)
  }

  return(
    <select
      defaultValue="default"
      name="country-selector"
      id="country-selector"
      onChange={handleChange}
    >
      <option disabled value="default">Choose a country</option>
      {options}
    </select>
  )
};

export default CountrySelector;
