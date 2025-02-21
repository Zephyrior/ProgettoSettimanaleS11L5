import { Col, Container, Row } from "react-bootstrap";
import MyMusicCollection from "./MyMusicCollection";
import { useSelector } from "react-redux";
import MyMusicQuery from "./MyMusicQuery";

const MyMainPage = () => {
  //   const searchedSongs = useSelector((state) => state.song.searchedSongs);
  const searchedSongs = useSelector((state) => state.songs.searchedSongs);
  console.log("searched songs", searchedSongs[0]);
  const searchedArtist = useSelector((state) => state.search.searchItem);
  console.log(searchedSongs);
  console.log(searchedArtist);
  return (
    <>
      <Container className="p-0" fluid>
        <Col xs={12} sm={10} style={{ background: "rgb(46, 63, 87)", marginLeft: "auto" }}>
          <Container className="p-4">
            <Row>
              <Col xs={9} className="mx-auto">
                <ul className="d-flex justify-content-evenly" style={{ listStyle: "none" }}>
                  <li style={{ textTransform: "uppercase", fontWeight: "bold", color: "white" }}>Trending</li>
                  <li style={{ textTransform: "uppercase", fontWeight: "bold", color: "white" }}>Podcast</li>
                  <li style={{ textTransform: "uppercase", fontWeight: "bold", color: "white" }}>Moods and Genres</li>
                  <li style={{ textTransform: "uppercase", fontWeight: "bold", color: "white" }}>New Releases</li>
                  <li style={{ textTransform: "uppercase", fontWeight: "bold", color: "white" }}>Discover</li>
                </ul>
              </Col>
            </Row>
          </Container>
          <Container>
            {searchedSongs && <MyMusicQuery artist={searchedArtist} />}
            <MyMusicCollection artist="Cup of Joe" />
            <MyMusicCollection artist="Bini" />
            <MyMusicCollection artist="Dionela" />
            {searchedArtist && <MyMusicCollection artist={searchedArtist} />}
          </Container>
        </Col>
      </Container>
    </>
  );
};
export default MyMainPage;
