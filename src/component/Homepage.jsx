import NavBar from "./NavBar";
import SectionOne from "./SectionOne";
import "../App.css";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import Layout from "./Layout";

const HomePage = () => {
  return (
    <div className="try">
      {/* <NavBar /> */}

      <Layout>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </Layout>
      {/* <SectionSix /> */}
    </div>
  );
};

export default HomePage;
