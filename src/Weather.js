import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

class Weather extends React.Component{
  render(){
    return (
      <>
        <OverlayTrigger
          key={this.props.weatherData.id}
          trigger="click"
          placement={"right"}
          overlay={
            <Popover>
              <Popover.Header as="h3">
                {this.props.weatherData.desc}
              </Popover.Header>
              <Popover.Body>
                <p>Hi-Temp: {this.props.weatherData.max} °F</p>
                <p>Lo-Temp: {this.props.weatherData.min} °F</p>
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary">{this.props.weatherData.date}</Button>
        </OverlayTrigger>
      </>
    );
  }
}

export default Weather
