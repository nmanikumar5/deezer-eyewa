// @ts-nocheck
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/reducer";
import rootSaga from "./sagas/deezer";

// we need an initialState otherwise , store will freak out
const initialState = {
  deezer: {
    artistName: "",
    albumList: [],
    artistList: [],
    selectedArtist: null,
    selectedAlbum: null,
    trackList: [],
  },
};

const sagaMiddleware = createSagaMiddleware();

// redux sagas is a middleware that we apply to the store
export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;
