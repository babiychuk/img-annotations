import React from "react";
import UploadPhoto from "./UploadPhoto";
import { useSelector } from "react-redux";

import Grid from "@material-ui/core/Grid";

const Header = () => {
  const { imageName } = useSelector((state) => state.image);

  return (
    <Grid container spacing={2}>
      <Grid item xs={8} className="header-block">
        <span className="img-name">
          {imageName ?? "Here goes the file name"}
        </span>
      </Grid>
      <Grid item xs={4}>
        <UploadPhoto />
      </Grid>
    </Grid>
  );
};

export default Header;
