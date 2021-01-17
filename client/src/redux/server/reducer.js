import types from "../types";

const server = (
  state = {
    status: false,
  },
  { type }
) => {
  switch (type) {
    case types.CONNECT_TO_SERVER_START:
      return { status: false };
    case types.CONNECT_TO_SERVER_SUCCESS:
      return { status: true };
    case types.CONNECT_TO_SERVER_FAILURE:
      return { status: false };

    default:
      return state;
  }
};

export default server;
