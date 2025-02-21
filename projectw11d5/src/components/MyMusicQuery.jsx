// import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyMusicQuery = (props) => {
  const searchedSongs = useSelector((state) => state.songs.searchedSongs);
  const songs = searchedSongs[0] || [];

  return (
    <>
      <Container>
        <h2 className="mb-4">{props.artist}</h2>
        <Row className="p-0" xs={4}>
          {songs.map((song) => (
            <Col className="text-center" key={song.id}>
              <Image fluid src={song.album.cover_medium} />
              <p className="mt-1 mb-0">Track: &quot;{song.title}&quot;</p>
              <p className="mb-3">Artist: {song.artist.name}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default MyMusicQuery;
