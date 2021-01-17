import types from "../types";
import api from "../../services/api";

export const uploadImage = (formData, imgName, uploadSuccess) => async (
  dispatch
) => {
  dispatch({ type: types.UPLOAD_IMAGE_START });
  try {
    const { data, status } = await api.image.upload(formData);
    if (status < 200 && status >= 300) throw new Error("Something went wrong");
    dispatch({ type: types.UPLOAD_IMAGE_SUCCESS, payload: data, imgName });
    uploadSuccess();
  } catch (error) {
    dispatch({ type: types.UPLOAD_IMAGE_FAILURE });
    if (error?.response?.status === 401) return;
    console.log(error?.response?.data?.error ?? "Something went wrong");
  }
};

export const deleteImage = (deleteSuccess) => async (dispatch) => {
  dispatch({ type: types.DELETE_IMAGE_START });
  try {
    dispatch({ type: types.DELETE_IMAGE_SUCCESS });
    deleteSuccess();
  } catch (error) {
    dispatch({ type: types.DELETE_IMAGE_FAILURE });
    if (error?.response?.status === 401) return;
    console.log(error?.response?.data?.error ?? "Something went wrong");
  }
};
