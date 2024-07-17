import NavBar from "./NavBar";
import SectionSix from "./SectionSix";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <SectionSix />
    </>
  );
};

export default Layout;
