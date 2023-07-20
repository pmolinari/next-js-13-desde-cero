import React from "react";
import Image from "next/image";
import { Navbar } from "../../components";
import { Routes } from "../../models";

async function getData() {
  const response = await fetch("https://rickandmortyapi.com/api/character/2");
  return await response.json();
}

const Dashboard = async () => {
  const data = await getData();

  return (
    <>
      <Navbar pathnames={[Routes.HOME, Routes.CHARACTERS, Routes.LOCATIONS]} />
      Dashboard
      <Image width="100" height="100" src={data.image} alt={"Morty image"} />
    </>
  );
};

export default Dashboard;
