import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <Row className="my-5 footer">
      <Col>
        <Row>
          <p className="footer-title">Let's Connect</p>
        </Row>
        <Row>
{/* github */}
          <Col xs={1} className="ms-auto">
            <a href="https://github.com/sarjohnson" aria-label="Link to GitHub profile" target="_blank" rel="noreferrer">
              <img src="github.svg"></img>
            </a>
          </Col>
{/* linkedin */}
          <Col xs={1} className="mx-1">
            <a href="https://www.linkedin.com/in/sarah-johnson-dev/" aria-label="Link to LinkedIn profile" target="_blank" rel="noreferrer">
                <img src="linkedin.svg"></img>
            </a>
          </Col>
{/* instagram */}
          <Col xs={1} className="me-auto">
            <a href="https://medium.com/@sarjohnson" aria-label="Link to Medium account" target="_blank" rel="noreferrer">
            <img src="medium.svg"></img>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Footer;