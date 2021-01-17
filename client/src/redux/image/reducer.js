import types from "../types";

const image = (
  state = {
    image: [],
    imageName: null,
    loading: false,
  },
  { type, payload, imgName }
) => {
  switch (type) {
    case types.UPLOAD_IMAGE_START:
      return { ...state, loading: true };

    case types.UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        image: payload,
        imageName: imgName,
        loading: false,
      };

    case types.UPLOAD_IMAGE_FAILURE:
      return { ...state, loading: false };

    case types.DELETE_IMAGE_START:
      return { ...state, loading: true };

    case types.DELETE_IMAGE_SUCCESS:
      return {
        ...state,
        image: [],
        imageName: null,
        loading: false,
      };

    case types.DELETE_IMAGE_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default image;
