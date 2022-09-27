import React from "react";
import Alert from "react-bootstrap/Alert";

class ErrorAlert extends React.Component {

  render(){
    return (
      <Alert variant="danger">
        <Alert.Heading>D'oh!</Alert.Heading>
        <p>
          {this.props.errorMessage}
        </p>
      </Alert>
    );
  }
}

export default ErrorAlert;
