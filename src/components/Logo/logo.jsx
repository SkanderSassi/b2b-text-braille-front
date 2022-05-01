import React from "react";
import classNames from "classnames";
import classes from "./logo.module.css";
const Logo = ({ srcPath, altText, className,...rest }) => {
  return (
    <div>
      <img
        {...rest}
        src={srcPath}
        className={classNames(classes.logo, className)}
        alt={altText}
      />
    </div>
  );
};

export default Logo;