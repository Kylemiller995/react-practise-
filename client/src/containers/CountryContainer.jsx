import React from 'react';
import CountrySelector from '../components/CountrySelector';
import CountryDetail from '../components/CountryDetail';

class CountryContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      countries: [],
      focusCountry: null
    };
    this.handleCountrySelected = this.handleCountrySelected.bind(this);
  }

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all';
    const request = new XMLHttpRequest()
    request.open('GET', url)

    request.onload = () => {
      if (request.status === 200) {
        const jsonString = request.responseText
        const data = JSON.parse(jsonString)
        this.setState({ countries: data })
      }
    }
    request.send()
  }

  handleCountrySelected(index){
    const target = this.state.countries[index]
    this.setState({focusCountry: target})
  }

  render(){
    return (
      <div>
        <h2>Country Container</h2>
        <CountrySelector
          countries={this.state.countries}
          selectCountry={this.handleCountrySelected}/>
        <CountryDetail country={this.state.focusCountry}/>
      </div>
    );
  }
}

export default CountryContainer;
