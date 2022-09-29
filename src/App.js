import React from "react";
import axios from "axios";
import {Container, Form, Button} from "react-bootstrap";
import CityShowcase from "./CityShowcase";
import ErrorAlert from "./ErrorAlert";
import Weather from "./Weather";
import MovieDisp from "./MovieDisp"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      searchQuery: '',
      location: {},
      error: false,
      errorMessage: '',
      weather: [],
      server: 'https://rutkinj-city-explorer.herokuapp.com'
    }
  }

  handleInput = (e) => {
    this.setState({searchQuery: e.target.value})
  }

  handleSearch = async (e) => {
    e.preventDefault();
    this.setState({
        location: {},
        error: false,
        errorMessage: '',
        weather: [],
        movies: [],
      })

    try{
      let API = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
      let getResponse = await axios.get(API);
      this.setState({location: getResponse.data[0]});
      this.handleWeather(getResponse.data[0].lat,getResponse.data[0].lon)
      this.handleMovies(this.state.searchQuery)
    } catch (error){
      console.log('Error y\'all: ', error.message);
      this.setState({error: true, errorMessage: error.message})
    }
  }

  handleWeather = async (lat,lon) => {
    try {
      let weatherResponse = await axios.get(
        `${this.state.server}/weather?searchQuery=${this.state.searchQuery}&lat=${lat}&lon=${lon}`
      );
      // console.log(weatherResponse);
      this.setState({weather: weatherResponse.data});
    } catch (error) {
      console.log('Got an error: ', error.message)
      this.setState({ error: true, errorMessage: error.message });
    }
  }

  handleMovies = async (loc) => {
    try{
      let movieResponse = await axios.get(`${this.state.server}/movies?searchQuery=${loc}`)
      this.setState({movies: movieResponse.data});
    } catch (error){
      console.log('bingbong whoopsy')
    }
  }

  render(){
    return (
      <>
        <Container>
          <Form className="mt-3">
            <input
              onChange={this.handleInput}
              placeholder="enter city here"
            ></input>
            <Button onClick={this.handleSearch}>Explore!</Button>
          </Form>
          {this.state.error && (
            <>
              <ErrorAlert errorMessage={this.state.errorMessage} />
            </>
          )}
          {this.state.location.display_name && (
            <>
              <CityShowcase city={this.state.location} />
            </>
          )}
          {this.state.weather &&
            this.state.weather.map((data) => (
              <Weather weatherData={data} />
          ))}
          {this.state.movies &&
            this.state.movies.map((data) => (
              <MovieDisp movieData={data} />
          ))}
        </Container>
      </>
    );
  }
}

export default App;
