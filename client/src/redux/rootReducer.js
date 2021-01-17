import { combineReducers } from "redux";

import server from "./server/reducer";
import image from "./image/reducer";

const rootReducers = combineReducers({
  server,
  image,
});

export default rootReducers;
