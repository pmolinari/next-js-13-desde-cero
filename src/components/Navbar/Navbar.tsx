import Link from "next/link";
import React from "react";
import { Route } from "../../models";

interface Props {
  pathnames: Route[];
}

const Navbar = ({ pathnames }: Props) => {
  return (
    <nav className="bg-slate-200 text-slate-400  space-x-5 p-2">
      {pathnames.map((pathname) => (
        <Link
          className="hover:text-slate-800"
          key={pathname.name}
          href={pathname.path}
        >
          {pathname.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
