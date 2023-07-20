import React from "react";
import { Navbar } from "../../components";
import { Routes } from "../../models";

const Locations = () => {
  return (
    <>
      <Navbar pathnames={[Routes.HOME, Routes.CHARACTERS, Routes.DASHBOARD]} />
      Locations
    </>
  );
};

export default Locations;
