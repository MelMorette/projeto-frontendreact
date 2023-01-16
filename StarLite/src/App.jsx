import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header/index";
import Main from "./components/Main/index";
import Footer from "./components/Footer/index";
import Cart from "./components/Cart/index";
import useRequestData from "./hooks/useRequestData";
import useSearch from "./hooks/useSearch";
import useCart from "./hooks/useCart";

// const cor = #860089;

export default function App() {
  const [page, setPage] = useState(1);
  const satellites = useRequestData();
  const search = useSearch();
  const { cart, setCart, totalValue, totalQuant, addCart, awayCart, deleteCart} = useCart();

  return page === 1 ? (
    <>
      <GlobalStyle />
      <Header setPage={setPage} totalValue={totalValue} totalQuant={totalQuant}/>
      <Main
        addCart={addCart}
        listSatellites={satellites.listSatellite.items}
        search={search}
      />
      <Footer />
    </>
  ) : (
    <>
      <GlobalStyle />
      <Cart
        setPage={setPage}
        cart={cart}
        setCart={setCart}
        totalValue={totalValue}
        addCart={addCart}
        awayCart={awayCart}
        deleteCart={deleteCart}
      />
      <Header setPage={setPage} totalValue={totalValue}/>
      <Main
        addCart={addCart}
        listSatellites={satellites.listSatellite.items}
        search={search}
      />
      <Footer />
    </>
  );
}


