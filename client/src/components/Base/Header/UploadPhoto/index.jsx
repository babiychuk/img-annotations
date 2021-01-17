import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { notify } from "react-notify-toast";
import notification from "../../../../services/notification";
import { uploadImage } from "../../../../redux/image/actions";

const UploadPhoto = () => {
  const dispatch = useDispatch();
  const toast = notify.createShowQueue();
  const inputFile = useRef(null);

  const clearInputFile = () => {
    inputFile.current.value = "";
  };

  const hendleUploadPphoto = (e) => {
    const errs = [];
    const files = Array.from(e.target.files);

    const formData = new FormData();
    const types = ["image/png", "image/jpeg", "image/gif"];

    files.forEach((file, i) => {
      if (types.every((type) => file.type !== type)) {
        errs.push(
          `Ваш файл '${file.type}' не подходит по формату, загрузите изображение`
        );
      }

      if (file.size > 300000) {
        errs.push(
          `Ваш файл '${file.name}' слишком большой, пожалуйста выберите изображение поменьше`
        );
      }

      formData.append(i, file);
    });

    if (errs.length) {
      clearInputFile();
      return errs.forEach((err) =>
        toast(err, "custom", 2000, notification.styles.error)
      );
    }

    const uploadSuccess = () => {
      toast(
        `${notification.messages.imgUpload} '${files[0]?.name}'`,
        "custom",
        3000,
        notification.styles.success
      );
    };

    dispatch(uploadImage(formData, files[0]?.name, uploadSuccess));
    clearInputFile();
  };
  return (
    <div  className="upload-block">
      <button type="button" className="upload-btn">
        <input
          type="file"
          ref={inputFile}
          className="upload-input"
          onChange={hendleUploadPphoto}
        />
        <span className="post-btn__icon">
          <label htmlFor="multi">Upload image</label>
        </span>
      </button>
    </div>
  );
};

export default UploadPhoto;
