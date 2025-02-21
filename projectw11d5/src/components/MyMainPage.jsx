import { Col, Container } from "react-bootstrap";
import MyMusicCollection from "./MyMusicCollection";
import { useSelector } from "react-redux";
import MyMusicQuery from "./MyMusicQuery";
import MyNavLinks from "./MyNavLinks";

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
        <Col
          xs={12}
          sm={10}
          style={{
            background: "rgb(46, 63, 87)",
            backgroundImage: "linear-gradient(90deg, rgb(63, 86, 119) 0%, rgba(33, 44, 61, 1) 42%, rgb(15, 21, 29) 100%)",
            marginLeft: "auto",
          }}
        >
          <MyNavLinks />
          <Container>
            {searchedSongs && <MyMusicQuery artist={searchedArtist} />}
            <MyMusicCollection artist="Cup of Joe" />
            <MyMusicCollection artist="Bini" />
            <MyMusicCollection artist="Dionela" />
            {/* {searchedArtist && <MyMusicCollection artist={searchedArtist} />} */}
          </Container>
        </Col>
      </Container>
    </>
  );
};
export default MyMainPage;
