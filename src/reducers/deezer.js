import { ARTIST_ACTIONS, ALBUM_ACTIONS } from "../actions";

const initialState = {
  artistName: "",
  albumList: [],
  artistList: [],
  selectedArtist: null,
  selectedAlbum: null,
  trackList: [],
};

const deezer = (state = initialState, action) => {
  switch (action.type) {
    case ARTIST_ACTIONS.FETCH_ARTISTS:
      return {
        ...state,
        artistName: action.payload,
      };
    case ARTIST_ACTIONS.FETCH_ARTISTS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case ARTIST_ACTIONS.FETCH_ARTISTS_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case ALBUM_ACTIONS.FETCH_ALBUMS:
      return {
        ...state,
        selectedArtist: action.payload,
      };
    case ALBUM_ACTIONS.FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case ALBUM_ACTIONS.FETCH_ALBUMS_FAILED:
      return {
        ...state,
        albumList: [],
      };
    case ALBUM_ACTIONS.FETCH_TRACKS:
      return {
        ...state,
        selectedAlbum: action.payload,
      };
    case ALBUM_ACTIONS.FETCH_TRACKS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case ALBUM_ACTIONS.FETCH_TRACKS_FAILED:
      return {
        ...state,
        trackList: [],
      };
    default:
      return state;
  }
};

export default deezer;
