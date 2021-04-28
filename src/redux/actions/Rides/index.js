import {
  FETCHING_RIDES,
  FETCHING_RIDES_FAILURE,
  FETCHING_RIDES_SUCCESS,
} from '../../constants/Rides';
import * as APIUtil from '../../../api/utils/Rides';

export function fetchRidesApi(rides) {
  return async dispatch => {
    // console.log('i am printing fetching something');
    try {
      if (rides === 0) {
        dispatch(fetchingRides()); //show loader when no ride is fetched
      }
      const response = await APIUtil.fetchUsers();
      if (response.status === 200) {
        const res = await response.json();
        dispatch(fetchingRidesSuccess(res));
      } else {
        dispatch(fetchingRidesFailure());
      }
    } catch (e) {
      dispatch(fetchingRidesFailure());
    }
  };
}

export function fetchingRides() {
  return {
    type: FETCHING_RIDES,
  };
}

export function fetchingRidesFailure() {
  return {
    type: FETCHING_RIDES_FAILURE,
  };
}

export function fetchingRidesSuccess(payload) {
  return {
    type: FETCHING_RIDES_SUCCESS,
    payload: payload,
  };
}
