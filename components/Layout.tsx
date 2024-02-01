import { ReactNode } from "react";
import TopNav from "./TopNav";
import MainNav from "./MainNav";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <TopNav />
      <MainNav />
      {children}
    </div>
  );
};

export default Layout;
