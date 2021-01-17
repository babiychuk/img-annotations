import React from "react";
import Server500 from "../../../img/server_error.png";

const ErrorWrap = () => {
  return (
    <div className="error-block">
      <div className="server-500">
        <img src={Server500} alt="server no answer" />
      </div>
    </div>
  );
};

export default ErrorWrap;
