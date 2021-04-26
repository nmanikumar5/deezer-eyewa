import { put, call, takeEvery, all, throttle } from "redux-saga/effects";
import { ARTIST_ACTIONS, ALBUM_ACTIONS } from "../actions";
import { getCall } from "../helpers/utils";

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
    if (response != null && response.status === 200) {
      yield put({
        type: ARTIST_ACTIONS.FETCH_ARTISTS_SUCCESS,
        payload: {
          artistList: response.data.data,
        },
      });
    } else {
      yield put({
        type: ARTIST_ACTIONS.FETCH_ARTISTS_FAILED,
        payload: {
          artistList: [],
        },
      });
    }
  } catch (e) {
    yield put({
      type: ARTIST_ACTIONS.FETCH_ARTISTS_FAILED,
      payload: {
        artistList: [],
      },
    });
  }
}

export function* getAlbums(data) {
  try {
    const { response } = yield call(getAlbumList, data.payload.id);
    if (response != null && response.status === 200) {
      yield put({
        type: ALBUM_ACTIONS.FETCH_ALBUMS_SUCCESS,
        payload: {
          albumList: response.data.data,
          trackList: [],
          selectedAlbum: [],
        },
      });
    } else {
      yield put({
        type: ALBUM_ACTIONS.FETCH_ALBUMS_FAILED,
        payload: {
          albumList: [],
          trackList: [],
        },
      });
    }
  } catch (e) {
    yield put({
      type: ALBUM_ACTIONS.FETCH_ALBUMS_FAILED,
      payload: {
        albumList: [],
        trackList: [],
      },
    });
  }
}

export function* getTracks(data) {
  try {
    const { response } = yield call(getTrackList, data.payload.id);
    if (response != null && response.status === 200) {
      yield put({
        type: ALBUM_ACTIONS.FETCH_TRACKS_SUCCESS,
        payload: {
          trackList: response.data.data,
        },
      });
    } else {
      yield put({
        type: ALBUM_ACTIONS.FETCH_TRACKS_FAILED,
        payload: {
          trackList: [],
        },
      });
    }
  } catch (e) {
    yield put({
      type: ALBUM_ACTIONS.FETCH_TRACKS_FAILED,
      payload: { trackList: [] },
    });
  }
}

export default function* rootSaga() {
  yield all([
    throttle(200, ARTIST_ACTIONS.FETCH_ARTISTS, getArtists),
    takeEvery(ALBUM_ACTIONS.FETCH_ALBUMS, getAlbums),
    takeEvery(ALBUM_ACTIONS.FETCH_TRACKS, getTracks),
  ]);
}
