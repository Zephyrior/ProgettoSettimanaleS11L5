import { Col, Container, Row } from "react-bootstrap";

const MyNavLinks = () => {
  return (
    <>
      <Container className="p-4">
        <Row>
          <Col xs={9} className="mx-auto">
            <ul className="d-flex justify-content-between" style={{ listStyle: "none" }}>
              <li style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Trending
                </a>
              </li>
              <li style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Podcast
                </a>
              </li>
              <li style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Moods and Genres
                </a>
              </li>
              <li style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  New Release
                </a>
              </li>
              <li style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Discover
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MyNavLinks;
