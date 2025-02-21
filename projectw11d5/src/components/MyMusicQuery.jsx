// import { useEffect, useState } from "react";
import { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongAction } from "../redux/actions";

const MyMusicQuery = (props) => {
  const searchedSongs = useSelector((state) => state.songs.searchedSongs);
  const songs = searchedSongs[0] || [];
  const searchArtist = useSelector((state) => state.search.searchItem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchArtist]);
  return (
    <>
      <Container>
        <h2 style={{ color: "white", textTransform: "uppercase" }} className="mb-4">
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
export default MyMusicQuery;
