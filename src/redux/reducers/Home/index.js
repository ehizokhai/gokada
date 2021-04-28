import {FETCHING_HOME_DETAILS} from '../../constants/Home';
const initialState = {
  isFetching: false,
  showContent: false,
  error: false,
  showModal: false,
  isSubmitting: false,
  maturedbids: [],
  activebids: [],
};

export default homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_HOME_DETAILS:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    default:
      return state;
  }
};
