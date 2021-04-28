import {
  FETCHING_RIDES,
  FETCHING_RIDES_FAILURE,
  FETCHING_RIDES_SUCCESS,
} from '../../constants/Rides';
const initialState = {
  rides: [],
  isFetching: false,
  showContent: false,
  error: false,
  showModal: false,
  isSubmitting: false,
  maturedbids: [],
  activebids: [],
};

export default ridesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_RIDES:
      return {
        ...state,
        bids: [],
        isFetching: true,
        error: false,
      };
    case FETCHING_RIDES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        rides: action.payload,
      };
    case FETCHING_RIDES:
      return {
        ...state,
        isFetching: true,
        rides: action.payload,
      };
    case FETCHING_RIDES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};
