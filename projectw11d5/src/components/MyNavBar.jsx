import { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { fetchSongAction, searchArtistAction } from "../redux/actions";
import { Link } from "react-router";

// import MyMusicCollection from "./MyMusicCollection";

const MyNavBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  // const searchArtist = useSelector((state) => state.search.searchItem);
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchArtistAction(search));
    dispatch(fetchSongAction());
    setSearch("");
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            className="d-none d-sm-flex flex-column justify-content-between"
            sm={2}
            style={{ backgroundColor: "black", position: "fixed", height: "100vh", zIndex: 999 }}
          >
            {/* top */}
            {/* <div className="d-flex flex-column justify-content-between"> */}
            <Container>
              <Image fluid src="./src/assets/logo.png" style={{ width: "131px", height: "40px" }} className="my-4" />
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-link" style={{ fontSize: "1.5em" }}>
                  <Link to={"/"} style={{ textDecoration: "none", color: "rgb(145, 145, 145)" }}>
                    <HouseDoorFill style={{ fontSize: "1.2em" }} className="me-1" /> Home
                  </Link>
                </li>
                <li className="nav-link" style={{ fontSize: "1.5em" }}>
                  <Link to={"/mylibrary"} style={{ textDecoration: "none", color: "rgb(145, 145, 145)" }}>
                    <BookFill style={{ fontSize: "1.2em" }} className="me-1" /> Your Library{" "}
                  </Link>
                </li>
                <li className="nav-link">
                  <Form className="d-flex" role="search" onSubmit={handleSearch}>
                    <Form.Control
                      className="border border-end-0 rounded-start rounded-0"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={search}
                      required
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                    <Button variant="outline-secondary" className="border border-light border-start-0 rounded-0 rounded-end" type="submit">
                      Go
                    </Button>
                  </Form>
                </li>
              </ul>
            </Container>
            {/* bottom */}
            <Container className="d-flex flex-column mt-auto">
              <Button variant="light" className="rounded-5 my-2" type="button">
                Sign Up
              </Button>
              <Button variant="dark" className="rounded-5 my-2 border border-light" type="button">
                Login
              </Button>
              <div className="d-flex justify-content-center my-3">
                <a href="#" style={{ color: " rgb(145, 145, 145)", textDecoration: "none" }} className="me-1">
                  Cookie
                </a>
                |
                <a href="#" style={{ color: " rgb(145, 145, 145)", textDecoration: "none" }} className="mx-1">
                  Policy
                </a>
                |
                <a href="#" style={{ color: " rgb(145, 145, 145)", textDecoration: "none" }} className="ms-1">
                  Privacy
                </a>
              </div>
            </Container>
          </Col>

          {/* MainPage */}
          {/* <Col xs={12} sm={10} style={{ background: "rgb(46, 63, 87)", marginLeft: "auto" }}>
            <Container className="p-4">
              <Row>
                <Col xs={9} className="mx-auto">
                  <ul className="d-flex justify-content-evenly" style={{ listStyle: "none" }}>
                    <li style={{ textTransform: "uppercase", fontWeight: "bold" }}>Trending</li>
                    <li style={{ textTransform: "uppercase", fontWeight: "bold" }}>Podcast</li>
                    <li style={{ textTransform: "uppercase", fontWeight: "bold" }}>Moods and Genres</li>
                    <li style={{ textTransform: "uppercase", fontWeight: "bold" }}>New Releases</li>
                    <li style={{ textTransform: "uppercase", fontWeight: "bold" }}>Discover</li>
                  </ul>
                </Col>
              </Row>
            </Container>
            <Container>
              <MyMusicCollection artist="Cup of Joe" />
              <MyMusicCollection artist="Bini" />
              <MyMusicCollection artist="Dionela" />
            </Container>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};
export default MyNavBar;
