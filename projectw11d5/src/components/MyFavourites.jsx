// import { useEffect, useState } from "react";

import { Alert, Button, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addtoFavouritesAction, removeFromFavouritesAction, setSelectSongAction } from "../redux/actions";
import MyNavLinks from "./MyNavLinks";

const MyFavourites = () => {
  const dispatch = useDispatch();
  const favouriteSongs = useSelector((state) => state.favourites.favourites);
  console.log(favouriteSongs);

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
            minHeight: "100vh",
          }}
        >
          <MyNavLinks />
          <Container style={{ paddingBottom: "7rem" }}>
            <h2 style={{ color: "white", textTransform: "uppercase" }} className="mb-4">
              Your Liked Songs
            </h2>
            {favouriteSongs.length === 0 ? (
              <Row className="p-0 d-flex justify-content-center mt-5" xs={2}>
                <Col className="text-center">
                  <Alert style={{ fontSize: "1.5rem" }} variant="info">
                    You do not have any liked songs. 💔
                  </Alert>
                </Col>
              </Row>
            ) : (
              <Row className="p-0" xs={4}>
                {favouriteSongs.map((song) => {
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
                            <Button variant="outline-*" className="border-0">
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
                            </Button>
                          ) : (
                            <Button variant="outline-*" className="border-0">
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
                            </Button>
                          )}
                        </Col>
                      </Row>
                    </Col>
                  );
                })}
              </Row>
            )}
          </Container>
        </Col>
      </Container>
    </>
  );
};
export default MyFavourites;
