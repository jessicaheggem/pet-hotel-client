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

function* addNewPet(action) {
    try {
        const response = yield axios.post(`/pets/${JSON.stringify(action.payload)}`);
        console.log('trying to add pet:', action.payload)
        yield put({ type: 'FETCH_PETS'})
    } catch (err){
        console.log('Error with addNewPetSaga', err);
    }
}
function* allPetsSaga(){
    yield takeEvery('FETCH_PETS', getAllPetsSaga);
    yield takeEvery('NEW_PET', addNewPet)
}

export default allPetsSaga;