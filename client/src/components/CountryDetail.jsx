import React from 'react';


const CountryDetail = (props) => {
  if(!props.country) return null
  return <h3>name : {props.country.name}, population = {props.country.population}</h3>

}
export default CountryDetail;
