import React from "react";
import classes from '../homeComponents/HomeScreen.module.css'

const Banner = () => {
  return (
    <div className={classes['banner-wrapper']}
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url('https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        backgroundSize: "cover",
        backgroundRepeat:'noRepeat',
        backgroundPosition:'center'
      }}
    >
      <div className={classes["banner-content"]}>
        <h1 className={classes["banner-title"]}>Rosemary Seared Steak</h1>
      </div>
    </div>
  );
};

export default Banner;
