import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import   "./App.css";
import { fetchData } from "./components/api";
import coronaImage from "./images/image.jpg";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className="container">
        <img className="image" src={coronaImage} alt="COVID-19" />
        <br />
        <text>
          <b>Global and Country Wise Cases of Corona Virus</b>
        </text>
        <br />
        <text>
          <i>(For a particular select a Country from below)</i>
        </text>
        <br />
        <br />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} country={country} />
        <Chart data={data} country={country} />
       
      </div>
     
    );
  }
}

export default App;