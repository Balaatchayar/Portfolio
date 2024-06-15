import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/Balaatchayar_resume.pdf"; // Adjusted path

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMailClick = () => {
    const subject = encodeURIComponent("Interested in Hiring You");
    const body = encodeURIComponent("");
    window.location.href = `mailto:atchayaramesh574@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <div className="d-flex flex-column align-items-center">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ width: "250px", marginBottom: "10px" }}
              aria-label="Download CV"
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
            <Button
              variant="primary"
              onClick={handleMailClick}
              style={{ width: "250px" }}
              aria-label="Wanna Hire Me"
            >
              Hire Me
            </Button>
          </div>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            onClick={handleMailClick}
            style={{ width: "250px" }}
            aria-label="Hire Me"
          >
            Hire Me
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
