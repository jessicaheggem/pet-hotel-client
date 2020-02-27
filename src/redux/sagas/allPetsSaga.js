import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getAllPetsSaga(){
    try{
        const response = yield axios.get('/pets');
        console.log('trying to get the pets saga')
        yield put({
            type: 'SET_PETS', payload: response.data
        })
    }
    catch (err){
        console.log('Error with getAllPetsSaga', err);
    }
}

function* allPetsSaga(){
    yield takeEvery('FETCH_PETS', getAllPetsSaga)
}

export default allPetsSaga;