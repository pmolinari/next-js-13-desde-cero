import React from "react";
interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return <>{children}</>;
};

export default Layout;
