import { Col, Container, Row } from "react-bootstrap";
import MyMusicCollection from "./MyMusicCollection";
import { useSelector } from "react-redux";
import MyMusicQuery from "./MyMusicQuery";

const MyMainPage = () => {
  //   const searchedSongs = useSelector((state) => state.song.searchedSongs);
  const searchedSongs = useSelector((state) => state.songs.searchedSongs);
  console.log(searchedSongs);
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
            {searchedSongs && <MyMusicQuery />}
            {searchedArtist && <MyMusicCollection artist={searchedArtist} />}
            <MyMusicCollection artist="Cup of Joe" />
            <MyMusicCollection artist="Bini" />
            <MyMusicCollection artist="Dionela" />
          </Container>
        </Col>
      </Container>
    </>
  );
};
export default MyMainPage;
