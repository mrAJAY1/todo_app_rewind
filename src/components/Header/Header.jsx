import React from "react";
import Style from "./Header.module.scss";

function Header() {
  return (
    <div className={Style.header}>
      <h1>A TODO APP</h1>
    </div>
  );
}

export default Header;
