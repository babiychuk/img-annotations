import types from "../types";
import api from "../../services/api";

export const connectServer = (successConnect, errorServer) => async (
  dispatch
) => {
  dispatch({ type: types.CONNECT_TO_SERVER_START });
  try {
    const data = await api.server.connect();

    dispatch({ type: types.CONNECT_TO_SERVER_SUCCESS, payload: data });
    successConnect();
  } catch (error) {
    dispatch({ type: types.CONNECT_TO_SERVER_FAILURE });
    if (error?.response?.status === 401) return;
    errorServer();
    console.log(error?.response?.data?.error ?? "Something went wrong");
  }
};
