import React from "react";
import { useSelector } from "react-redux";
import ImgContainer from "./ImgContainer";
import Loader from "../../Base/Loader";
import ButtonDeleteImg from "./ButtonDeleteImg";

import Grid from "@material-ui/core/Grid";

const Home = () => {
  const { loading, image } = useSelector((state) => state.image);
  return (
    <div className="home-paper">
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs>
          {image[0]?.secure_url && <ButtonDeleteImg />}
          {loading ? <Loader /> : <ImgContainer />}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
