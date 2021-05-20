import CharActionTypes from './types';

// import {
//   firestore,
//   convertCollectionsSnapshotToMap
// } from '../../firebase/firebase.utils';

export const getCharInfo = () => ({
  type: CharActionTypes.FETCH_CHARS_START
});

export const getCharInfoOK = charInfo => ({
  type: CharActionTypes.FETCH_CHARS_SUCCESS,
  payload: charInfo
});

export const getCharInfoKO = errorMessage => ({
  type: CharActionTypes.FETCH_CHARS_FAILURE,
  payload: errorMessage
});

// export const fetchCollectionsStartAsync = () => {
//   return dispatch => {
//     const collectionRef = firestore.collection('collections');
//     dispatch(fetchCollectionsStart());

//     collectionRef
//       .get()
//       .then(snapshot => {
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         dispatch(fetchCollectionsSuccess(collectionsMap));
//       })
//       .catch(error => dispatch(fetchCollectionsFailure(error.message)));
//   };
// };