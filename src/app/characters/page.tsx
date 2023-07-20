import React from "react";
import { getCharacters } from "./services";
import { Card, Navbar } from "../../components";
import { Routes } from "../../models";

const Characters = async () => {
  const characters = await getCharacters();

  return (
    <>
      <Navbar pathnames={[Routes.HOME, Routes.DASHBOARD, Routes.LOCATIONS]} />
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </>
  );
};

export default Characters;
