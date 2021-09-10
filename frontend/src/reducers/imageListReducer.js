import {
  IMAGE_LIST_REQUEST,
  IMAGE_LIST_SUCCESS,
  IMAGE_LIST_FAIL,
} from "../constants/imagesConstants";

export const imageListReducer = (
  state = { images: [] , loading: true },
  action
) => {
  switch (action.type) {
    case IMAGE_LIST_REQUEST:
      return { loading: true, images: [] };
    case IMAGE_LIST_SUCCESS:
      return { loading: false, images: action.payload };
    case IMAGE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
