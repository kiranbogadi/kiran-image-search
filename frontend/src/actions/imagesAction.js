import axios from "axios";
import {
  IMAGE_LIST_FAIL,
  IMAGE_LIST_REQUEST,
  IMAGE_LIST_SUCCESS,
} from "../constants/imagesConstants";

export const imageListDetails = async (dispatch, query) => {
  try {
    dispatch({ type: IMAGE_LIST_REQUEST });
    const { data } = await axios.get(`/api/searchimage/${query}`);
    dispatch({
      type: IMAGE_LIST_SUCCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: IMAGE_LIST_FAIL,
      payload: "Error in Fetching Images",
    });
  }
};
