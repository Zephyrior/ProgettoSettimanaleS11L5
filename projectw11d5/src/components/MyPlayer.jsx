import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyPlayer = () => {
  const selectedSong = useSelector((state) => state.selectedSong.songSelected);
  const selSong = selectedSong || null;
  console.log("selected song", selectedSong);
  return (
    <>
      <Container fluid style={{ height: "5.5rem", backgroundColor: "#282828", zIndex: "1" }} className="fixed-bottom bg-container pt-1">
        <Row className="h-100">
          <Col className="col-lg-10 offset-lg-2">
            <Row className={selSong ? "d-flex justify-content-start align-items-center" : "d-flex justify-content-center align-items-center"}>
              {selSong && (
                <Col className="col-6 col-md-4 d-flex">
                  <div>
                    <Image style={{ width: "80px", height: "80px" }} fluid src={selSong.album.cover_medium} />
                  </div>
                  <div className="p-3">
                    <p style={{ color: "white" }} className="m-0">
                      {selSong.title}
                    </p>
                    <p style={{ color: "white" }} className="m-0">
                      {selSong.artist.name}
                    </p>
                  </div>
                </Col>
              )}
              <Col className="col-6 col-md-4 playerControls">
                <div className="d-flex justify-content-between">
                  <a href="#">
                    <img style={{ width: "14px", marginTop: "1rem", filter: "brightness(60%)" }} src="src/assets/playerbuttons/shuffle.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img style={{ width: "14px", marginTop: "1rem", filter: "brightness(60%)" }} src="src/assets/playerbuttons/prev.png" alt="prev" />
                  </a>
                  <a href="#">
                    <img style={{ width: "14px", marginTop: "1rem", filter: "brightness(60%)" }} src="src/assets/playerbuttons/play.png" alt="play" />
                  </a>
                  <a href="#">
                    <img style={{ width: "14px", marginTop: "1rem", filter: "brightness(60%)" }} src="src/assets/playerbuttons/next.png" alt="next" />
                  </a>
                  <a href="#">
                    <img style={{ width: "14px", marginTop: "1rem", filter: "brightness(60%)" }} src="src/assets/playerbuttons/repeat.png" alt="repeat" />
                  </a>
                </div>
                <div style={{ color: "white", backgroundColor: "#414141", height: "3px" }} className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MyPlayer;
