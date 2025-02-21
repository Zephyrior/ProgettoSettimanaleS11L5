import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const MyMusicCollection = (props) => {
  const [songs, setSongs] = useState([]);
  const fetchSong = async () => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.artist.replace(/ /g, "+").toLowerCase()}`);
      if (resp.ok) {
        const { data } = await resp.json();
        console.log(data.slice(0, 4));
        setSongs(data.slice(0, 4));
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSong();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.artist]);
  return (
    <>
      <Container>
        <h2 style={{ color: "white" }} className="mb-4">
          {props.artist}
        </h2>
        <Row className="p-0" xs={4}>
          {songs.map((song) => (
            <Col className="text-center" key={song.id}>
              <Image fluid src={song.album.cover_medium} />
              <p style={{ color: "white" }} className="mt-1 mb-0">
                Track: &quot;{song.title}&quot;
              </p>
              <p style={{ color: "white" }} className="mb-3">
                Artist: {song.artist.name}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default MyMusicCollection;
