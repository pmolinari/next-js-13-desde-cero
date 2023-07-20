import { Navbar } from "../components";
import { Routes } from "../models";

export default function Home() {
  return (
    <>
      <Navbar
        pathnames={[Routes.CHARACTERS, Routes.DASHBOARD, Routes.LOCATIONS]}
      />
      Home
    </>
  );
}
