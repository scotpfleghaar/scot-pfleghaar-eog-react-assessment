import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";
import { values } from 'lodash';


/**
 * Generator to handle the data and errors from the Drone data endpoint.
 * @returns {IterableIterator<*|PutEffect<{payload: *, type: string}>|*|CancelEffect|CancelEffect[]|*|CallEffect|*|PutEffect<{code: number, type: string}>>}
 */
function* watchDroneGPSData() {
    const { error, data } = yield call(
        API.findDroneGPSData
    );
    if (error) {
        console.log({ error });
        yield put({ type: actions.API_ERROR, code: error.code });
        yield cancel();
        return;
    }
    yield put({ type: actions.DRONE_DATA_RECEIVED, data: values(data.data) });
}

function* watchAppLoad() {
    yield all([
        takeEvery(actions.FETCH_DRONE_DATA, watchDroneGPSData),
    ]);
}

export default [watchAppLoad];
