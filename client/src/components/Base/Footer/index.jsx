import React from "react";
import Grid from "@material-ui/core/Grid";

const Footer = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <div className="footer-text">
          To leave a comment, mouseover
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 9.5H15.5V9V7V6.5H15H9.5V1V0.5H9H7H6.5V1V6.5H1H0.5V7V9V9.5H1H6.5V15V15.5H7H9H9.5V15V9.5H15Z"
                fill="#454545"
                stroke="white"
              />
            </svg>

            <rect opacity="0.1" width="24" height="24" rx="4" fill="white" />
          </svg>
          on an image and click the left mouse button
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect opacity="0.1" width="24" height="24" rx="4" fill="white" />
          </svg>
        </div>
      </Grid>
    </Grid>
  );
};

export default Footer;
