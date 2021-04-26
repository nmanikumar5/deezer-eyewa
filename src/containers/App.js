import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import App from "../components/App";
import { getArtists, getAlbums, getTracks } from "../actions";

const mapStateToProps = (state) => {
  const {
    artistName,
    albumList,
    artistList,
    selectedArtist,
    trackList,
    selectedAlbum,
  } = state.deezer;
  return {
    artistName,
    albumList,
    artistList,
    selectedArtist,
    trackList,
    selectedAlbum,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getArtists,
      getAlbums,
      getTracks,
    },
    dispatch
  );

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
