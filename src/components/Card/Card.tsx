import { Character } from "@/app/characters/models";
import React from "react";

interface Props {
  data: Character;
}

const Card = ({ data }: Props) => {
  return <>{data.name}</>;
};

export default Card;
