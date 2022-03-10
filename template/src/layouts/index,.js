import React from "react";
import Header from "./components/headers";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebars";

export const WithSideBar = (props) => {
  return (
    <>
      <div className="layout-container">
        <SideBar></SideBar>
        <div className="w-100" id="content">
          <Header />
          {props.children}
        </div>
      </div>
    </>
  );
};

export const WithNavBar = (props) => {
  return (
    <>
      <div className="layout-container-nav-bar">
        <NavBar />
        <div className="w-100" id="content">
          {props.children}
        </div>
      </div>
    </>
  );
};
