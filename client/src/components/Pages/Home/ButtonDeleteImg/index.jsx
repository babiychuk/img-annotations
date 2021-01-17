import React from "react";
import { useDispatch } from "react-redux";
import { notify } from "react-notify-toast";
import notification from "../../../../services/notification";
import { deleteImage } from "../../../../redux/image/actions";

const ButtonDeleteImg = () => {
  const toast = notify.createShowQueue();
  const dispatch = useDispatch();

  const deleteSuccess = () => {
    toast(notification.messages.imgDeleted, "custom", 2000, notification.styles.success);
  };

  const hendleDeleteImg = () => {
    dispatch(deleteImage(deleteSuccess));
  };
  return (
    <>
      <div className="btn-detele" onClick={hendleDeleteImg}>
        <span>x</span>
      </div>
    </>
  );
};

export default ButtonDeleteImg;
