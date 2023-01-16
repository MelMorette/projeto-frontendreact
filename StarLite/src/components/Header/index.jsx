import React from "react";
import { MyHeader, LoginUser, LogoCart } from "./styled";
import cart from "../../assets/cart.png";
import logo from "../../assets/logo.png";

export default function Header({ setPage, totalValue, totalQuant }) {
  return (
    <MyHeader>
      <LoginUser>
        <p>
          Bem-Vindo(a)! Faça seu <span>Login</span> ou <span>Cadastre-se</span>
        </p>
      </LoginUser>
      <LogoCart>
        <figure className="logo-store">
          <img src={logo} alt="Logo da Star Lite" />
        </figure>
        <figure className="icon-cart">
          <img
            onClick={() => setPage(2)}
            src={cart}
            alt="Carrinho de Compras"
          />
          <p><span>{totalQuant}</span>Items: U$ {totalValue}</p>
        </figure>
      </LogoCart>
    </MyHeader>
  );
}
