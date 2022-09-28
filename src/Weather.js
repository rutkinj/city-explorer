import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

class Weather extends React.Component{
  render(){
    return (
      <>
        <OverlayTrigger
          trigger="click"
          placement={"right"}
          overlay={
            <Popover>
              <Popover.Header as="h3">{this.props.weatherData.date}</Popover.Header>
              <Popover.Body>
                {this.props.weatherData.desc}
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
