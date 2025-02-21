export const SEARCH_ARTIST = "SEARCH_ARTIST";
export const SEARCH_SONGS = "SEARCH_SONGS";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
// export const SET_DEFAULT_SONG = "SET_DEFAULT_SONG";
export const SET_CUPOFJOE = "SET_CUPOFJOE";
export const SET_BINI = "SET_BINI";
export const SET_DIONELA = "SET_DIONELA";
export const SELECT_SONG = "SELECT_SONG";

export const searchArtistAction = (artist) => ({ type: SEARCH_ARTIST, payload: artist });
export const searchSongsAction = (songs) => ({ type: SEARCH_SONGS, payload: songs });
export const addtoFavouritesAction = (fave) => ({ type: ADD_TO_FAVOURITES, payload: fave });
export const removeFromFavourites = (unFave) => ({ type: REMOVE_FROM_FAVOURITES, payload: unFave });
// export const setDefaultSongAction = (defaultSong) => ({ type: SET_DEFAULT_SONG, payload: defaultSong });
export const setCupOfJoeAction = (defaultSong) => ({ type: SET_CUPOFJOE, payload: defaultSong });
export const setBiniAction = (defaultSong) => ({ type: SET_BINI, payload: defaultSong });
export const setDionelaAction = (defaultSong) => ({ type: SET_DIONELA, payload: defaultSong });
export const setSelectSongAction = (selected) => ({ type: SELECT_SONG, payload: selected });

export const fetchSongAction = () => {
  return async (dispatch, getState) => {
    const searchedArtist = getState().search.searchItem;
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchedArtist.replace(/ /g, "+").toLowerCase()}`);
      if (resp.ok) {
        const { data } = await resp.json();
        console.log(data.slice(0, 4));
        dispatch(searchSongsAction(data.slice(0, 4)));
        // setSongs(data.slice(0, 4));
        // console.log(songs);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchDefaultSongAction = (artist) => {
  return async (dispatch) => {
    // const searchedArtist = getState().search.searchItem;
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist.replace(/ /g, "+").toLowerCase()}`);
      if (resp.ok) {
        const { data } = await resp.json();
        console.log(data.slice(0, 4));
        {
          switch (artist.toLowerCase()) {
            case "cup of joe":
              dispatch(setCupOfJoeAction(data.slice(0, 4)));
              break;
            case "bini":
              dispatch(setBiniAction(data.slice(0, 4)));
              break;
            case "dionela":
              dispatch(setDionelaAction(data.slice(0, 4)));
              break;
            default:
              console.log("Artist not found in default list");
          }
        }
        // dispatch(setDefaultSongAction());
        // setSongs(data.slice(0, 4));
        // console.log(songs);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
