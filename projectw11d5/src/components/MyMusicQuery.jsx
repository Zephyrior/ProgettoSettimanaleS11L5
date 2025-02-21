// import { useEffect, useState } from "react";
import { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addtoFavouritesAction, fetchSongAction, removeFromFavouritesAction, setSelectSongAction } from "../redux/actions";

const MyMusicQuery = (props) => {
  const searchedSongs = useSelector((state) => state.songs.searchedSongs);
  const songs = searchedSongs[0] || [];
  const searchArtist = useSelector((state) => state.search.searchItem);
  const dispatch = useDispatch();
  const favouriteSongs = useSelector((state) => state.favourites.favourites);
  console.log(favouriteSongs);

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
          {songs.map((song) => {
            const isFavourite = favouriteSongs.some((fav) => fav.id === song.id);

            return (
              <Col className="text-center" key={song.id}>
                <Image fluid src={song.album.cover_medium} onClick={() => dispatch(setSelectSongAction(song))} />
                <Row className="d-flex align-items-center">
                  <Col className="p-0" md={10}>
                    <p style={{ color: "white" }} className="mt-1 mb-0">
                      Track: &quot;{song.title}&quot;
                    </p>
                    <p style={{ color: "white" }} className="mb-3">
                      Artist: {song.artist.name}
                    </p>
                  </Col>
                  <Col className="p-0" md={2}>
                    {isFavourite ? (
                      <svg
                        onClick={() => {
                          dispatch(removeFromFavouritesAction(song.id));
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="#20D05D"
                        className="bi bi-heart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                      </svg>
                    ) : (
                      <svg
                        onClick={() => {
                          dispatch(addtoFavouritesAction(song));
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="#919191"
                        className="bi bi-heart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                      </svg>
                    )}
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default MyMusicQuery;
