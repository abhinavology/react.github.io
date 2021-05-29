import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Abhinav-C.V.pdf";


function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-center">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="VIPS [Pitampura, Delhi] "
              date="2021 - Present"
            />
            <Resumecontent
              title="12TH BOARD [Sumermal Jain Public School]"
              date="2020"
              content={["Precentage: 77%"]}
            />
            <Resumecontent
              title="10TH BOARD [Sumermal Jain Public School] "
              date="2018"
              content={["Precentage: 80%"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
