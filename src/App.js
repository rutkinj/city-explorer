import React from "react";
import axios from "axios";

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
        <input
          onChange={this.handleInput}
          placeholder="enter city here"
        ></input>
        <button onClick={this.handleSearch}>Explore!</button>
        {this.state.location.display_name && (
          <>
            <h2>The city is {this.state.location.display_name}</h2>
            <h3>Latitude: {this.state.location.lat}</h3>
            <h3>Longitude: {this.state.location.lon}</h3>
          </>
        )}
      </>
    );
  }
}

export default App;
