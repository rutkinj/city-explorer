import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Image from 'react-bootstrap/Image';

class CityShowcase extends React.Component{
  render(){
    return (
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{this.props.city.display_name}</Accordion.Header>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Latitude and Longitude</Accordion.Header>
          <Accordion.Body>Latitude: {this.props.city.lat} <br></br> Latitude: Longitude: {this.props.city.lon}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Map</Accordion.Header>
          <Accordion.Body ><Image
              src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.props.city.lat},${this.props.city.lon}&zoom=10`}
              alt={"well now, that ain't workin"}
              fluid
            /></Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
}

export default CityShowcase;
