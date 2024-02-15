import { ReactNode } from "react";
import TopNav from "./TopNav";
import MainNav from "./MainNav";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <TopNav />
      <MainNav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
