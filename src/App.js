import React from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import CityShowcase from "./CityShowcase";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      searchQuery: '',
      location: {},
    }
  }
  
  handleInput = (e) => {
    this.setState({searchQuery: e.target.value})
  }

  handleSearch = async (e) => {
    e.preventDefault();
    try{
      let API = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
      let getResponse = await axios.get(API);
      this.setState({location: getResponse.data[0]});
    } catch (error){
      console.log('Error y\'all: ', error.message);
    }

  }

  render(){
    return (
      <>
        <Container>
          <input
            onChange={this.handleInput}
            placeholder="enter city here"
            ></input>
          <button onClick={this.handleSearch}>Explore!</button>
          {this.state.location.display_name && (
            <>
              <CityShowcase city={this.state.location}/>
            </>
          )}
        </Container>
      </>
    );
  }
}

export default App;
