import { all } from 'redux-saga/effects';
import allPetsSaga from './allPetsSaga';




export default function* rootSaga(){
    yield all([
        allPetsSaga(),
    ])
}
