import React from "react";
import { useSelector } from "react-redux";
import { InfoCompany, Items, Navbar, Searcher } from "../../components";
import { Cart } from "../../components/Cart";
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const cartState = useSelector((state: any) => state.cart);
  return (
    <div>
      <InfoCompany />
      <Navbar />
      <Searcher />
      <Items />
      {cartState.cartItems.length > 0 && <Cart />}
    </div>
  );
};

export default Home;
