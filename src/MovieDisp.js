import React from "react";
import Toast from "react-bootstrap/Toast";

class Movie extends React.Component{
  render(){
    return (
      <>
        <Toast>
          <Toast.Header closeButton= {false} >
            <strong className="me-auto">{this.props.movieData.title}</strong>
          </Toast.Header>
          <Toast.Body>
            <p>{this.props.movieData.desc}</p>
            <small>Released: {this.props.movieData.releaseDate}</small>
          </Toast.Body>
        </Toast>
      </>
    );
  }
}

export default Movie;