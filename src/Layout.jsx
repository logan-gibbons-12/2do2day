import React from "react";
import {Outlet} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/Header";
import Backdrop from "./components/sidebar/Backdrop"

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Backdrop />
      <Outlet />
    </>
  );
};

export default Layout;
