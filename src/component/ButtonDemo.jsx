import React from "react";
import { MDBBtn } from "mdbreact";

const ButtonDemo = () => {
  return (
    <>
      <MDBBtn color="primary">Primary</MDBBtn>
      <MDBBtn>Default</MDBBtn>
      <MDBBtn color="secondary">Secondary</MDBBtn>
      <MDBBtn color="success">Success</MDBBtn>
      <MDBBtn color="info">Info</MDBBtn>
      <MDBBtn color="warning">Warning</MDBBtn>
      <MDBBtn color="danger">Danger</MDBBtn>
    </>
  );
}

export default ButtonDemo;
