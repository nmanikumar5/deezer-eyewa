import { put, call, takeEvery, all, throttle } from "redux-saga/effects";
import { ARTIST_ACTIONS, ALBUM_ACTIONS } from "../actions";
import { getCall } from "../helpers/utils";
import { action } from "../helpers/actionCreator";
import { API_SUCCESS_CODE } from "../constants";

const getArtistList = (artistName = "") => {
  return getCall(`search/artist?q=${artistName}`);
};

const getAlbumList = (artistId = null) => {
  return getCall(`artist/${artistId}/albums`);
};

const getTrackList = (albumId = null) => {
  return getCall(`album/${albumId}/tracks`);
};

export function* getArtists(data) {
  try {
    const { response } = yield call(getArtistList, data.payload);
    if (response != null && response.status === API_SUCCESS_CODE) {
      yield put(
        action(ARTIST_ACTIONS.FETCH_ARTISTS_SUCCESS, {
          artistList: response.data.data,
        })
      );
    } else {
      yield put(
        action(ARTIST_ACTIONS.FETCH_ARTISTS_FAILED, {
          artistList: [],
        })
      );
    }
  } catch (e) {
    yield put(
      action(ARTIST_ACTIONS.FETCH_ARTISTS_FAILED, {
        artistList: [],
      })
    );
  }
}

export function* getAlbums(data) {
  try {
    const { response } = yield call(getAlbumList, data.payload.id);
    if (response != null && response.status === API_SUCCESS_CODE) {
      yield put(
        action(ALBUM_ACTIONS.FETCH_ALBUMS_SUCCESS, {
          albumList: response.data.data,
          trackList: [],
          selectedAlbum: [],
        })
      );
    } else {
      yield put(
        action(ALBUM_ACTIONS.FETCH_ALBUMS_FAILED, {
          albumList: [],
          trackList: [],
        })
      );
    }
  } catch (e) {
    yield put(
      action(ALBUM_ACTIONS.FETCH_ALBUMS_FAILED, {
        albumList: [],
        trackList: [],
      })
    );
  }
}

export function* getTracks(data) {
  try {
    const { response } = yield call(getTrackList, data.payload.id);
    if (response != null && response.status === API_SUCCESS_CODE) {
      yield put(
        action(ALBUM_ACTIONS.FETCH_TRACKS_SUCCESS, {
          trackList: response.data.data,
        })
      );
    } else {
      yield put(
        action(ALBUM_ACTIONS.FETCH_TRACKS_FAILED, {
          trackList: [],
        })
      );
    }
  } catch (e) {
    yield put(
      action(ALBUM_ACTIONS.FETCH_TRACKS_FAILED, {
        trackList: [],
      })
    );
  }
}

export default function* rootSaga() {
  yield all([
    throttle(200, ARTIST_ACTIONS.FETCH_ARTISTS, getArtists),
    takeEvery(ALBUM_ACTIONS.FETCH_ALBUMS, getAlbums),
    takeEvery(ALBUM_ACTIONS.FETCH_TRACKS, getTracks),
  ]);
}
