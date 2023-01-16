import styled from "styled-components";

export const MyCart = styled.div`
  position: absolute;
  left: 60%;
  height: 165em;
  width: 100%;
  background-image: url("https://img.freepik.com/fotos-premium/superficie-da-textura-de-pedra-branca-tom-de-cinza-aspero-use-isto-para-papel-de-parede-ou-imagem-de-fundo-ha-um-espaco-em-branco-para-textx9_661047-475.jpg?w=2000");
  background-size: no-repeat;
  opacity: 90%;
  z-index: 2;

  ::after {
    content: "";
    background-color: #1c1c1c;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 1;
    z-index: -1;
  }
`;

export const HeaderCart = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 40%;
  background: whitesmoke;
  border: none;
  z-index: 2;
  border: solid 1px lightgrey;

  h2{
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: purple;
    margin-left: 30%;
  }

  h2 img{
    width: 4%;
    margin-right: 10px;
  }

  button {
    position: sticky;
    top: 100px;
    background: white;
    height: 30px;
    width: inherit;
    margin-bottom: 5px;
    border: outset 1px lightgrey;
    border-radius: 4px;
    font-weight: 600;
    color: purple;
  }

  button:hover{
    color: white;
    background: purple;
  }
`;

export const ItemsContainer = styled.div`
  position: sticky;
  top: 140px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  height: 30%;
  width: 37%;
  z-index: 0;
  overflow-y: scroll;

  .cart-empty{
    color: white;
  }
`;

export const ItemsCart = styled.div`
  position: sticky;
  display: flex;
  margin: 5px;
  height: 60px;
  width: 95%;
  border-radius: 4px;
  background: white;
  z-index: 1;
  font-family: monospace;


`;

export const InfoCart = styled.div`
  display: flex;
  width: 70%;
  height: inherit;
  align-items: center;
  justify-content: start;

  img {
    height: inherit;
    width: 30%;
  }
`;

export const ImgName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  width: 100%;
  height: inherit;
  font-weight: 550;
  gap: 7px;

  p,
  h4 {
    margin-left: 10px;
    text-transform: uppercase;
  }
`;

export const ButtonCart = styled.div`
  display: flex;
  height: inherit;
  align-items: center;
  justify-content: space-evenly;
  width: 30%;

  button {
    height: 25px;
    width: 25px;
    border-radius: 4px;
    color: purple;
  }
`;
