import React, { useEffect } from "react";
import cartIcon from "../../assets/cart.png";
import {
  MyCart,
  HeaderCart,
  ItemsContainer,
  ItemsCart,
  InfoCart,
  ImgName,
  ButtonCart
} from "./styled";

export default function Cart({ setPage, cart, setCart, totalValue, addCart, awayCart, deleteCart }) {

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, []);

  return cart.length === 0 ?
    (<>
      <MyCart>
        <HeaderCart>
          <h2><img src={cartIcon} />Total: U$ {totalValue}</h2>
          <button onClick={() => setPage(1)}>Fechar</button>
        </HeaderCart>
        <ItemsContainer>
          <h3 className="cart-empty">O carrinho está vazio!</h3>
        </ItemsContainer>
      </MyCart>
    </>
    ) : (
      <>
        <MyCart>
          <HeaderCart>
            <h2><img src={cartIcon} />Total: U$ {totalValue}</h2>
            <button onClick={() => setPage(1)}>Fechar</button>
          </HeaderCart>
          <ItemsContainer>
            {cart.map((item) => {
              return (
                <ItemsCart key={item.id}>
                  <InfoCart>
                    <img src={item.image} alt="Imagem Satélite" />
                    <ImgName>
                      <h4>{item.satellite}</h4>
                      <p>
                        U$ {item.price} x {item.quant}
                      </p>
                    </ImgName>
                  </InfoCart>
                  <ButtonCart>
                    <button onClick={() => addCart(item)}>➕</button>
                    <button onClick={() => awayCart(item)}>➖</button>
                    <button onClick={() => deleteCart(item)}>❌</button>
                  </ButtonCart>
                </ItemsCart>
              );
            })}
          </ItemsContainer>
        </MyCart>
      </>
    );
}

