import React from "react";
import { useSelector } from "react-redux";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";

import Anotation from "./Anotation";

const ImgContainer = () => {
  const { image } = useSelector((state) => state.image);

  return (
    <>
      {image[0]?.secure_url && (
        <TransformWrapper>
          {({
            zoomIn,
            zoomOut,
            setDefaultState,
            positionX,
            positionY,
            scale,
            previousScale,
            ...rest
          }) => (
            <>
              <div className="tools">
                <div className="spacer" />
                <button
                  className="btn-zoomIn"
                  onClick={zoomIn}
                  data-testid="zoom-in-button"
                >
                  <ZoomInIcon />
                </button>
                <button
                  className="btn-zoomOut"
                  onClick={zoomOut}
                  data-testid="zoom-out-button"
                >
                  <ZoomOutIcon />
                </button>
              </div>
              <div className="img-item">
                <TransformComponent>
                    <Anotation className="upload-img" img={image[0]?.secure_url}/>
                </TransformComponent>
              </div>
            </>
          )}
        </TransformWrapper>
      )}
    </>
  );
};

export default ImgContainer;
