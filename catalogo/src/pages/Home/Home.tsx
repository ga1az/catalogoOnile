import React from "react";
import { InfoCompany, Items, Navbar, Searcher } from "../../components";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <div>
      <InfoCompany />
      <Navbar />
      <Searcher />
      <Items />
    </div>
  );
};

export default Home;
