export const SEARCH_ARTIST = "SEARCH_ARTIST";
export const SEARCH_SONGS = "SEARCH_SONGS";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const searchArtistAction = (artist) => ({ type: SEARCH_ARTIST, payload: artist });
export const searchSongsAction = (songs) => ({ type: SEARCH_SONGS, payload: songs });
export const addtoFavouritesAction = (fave) => ({ type: ADD_TO_FAVOURITES, payload: fave });
export const removeFromFavourites = (unFave) => ({ type: REMOVE_FROM_FAVOURITES, payload: unFave });

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
