import styled from "styled-components";

export const CardFront = styled.div`
  display: flex;
  flex-direction: column;
  height: 29.29em;
  width: 17.5em;
  margin: 10px 3rem;
  border-radius: 5px;
  box-shadow: 6px 6px 12px gray;
  font-family: monospace;
  background-image: url("https://img.freepik.com/fotos-premium/superficie-da-textura-de-pedra-branca-tom-de-cinza-aspero-use-isto-para-papel-de-parede-ou-imagem-de-fundo-ha-um-espaco-em-branco-para-textx9_661047-475.jpg?w=2000");

  img {
    width: inherit;
    height: 9em;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .price-info {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2em;
  }

  .price {
    width: 80%;
    font-size: 20px;
    color: purple;
    margin-left: 10px;
  }

  .info {
    background: purple;
    color: white;
    height: 100%;
    width: 20%;
    font-weight: 600;
  }

  .info:hover {
    background: whitesmoke;
    color: purple;
    transition-duration: 0.4s;
  }

  .satellite {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: gray;
    color: white;
    width: inherit;
    height: 2.7em;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    word-spacing: 2px;
    font-size: 17px;
  }

  .description {
    font-size: 15px;
    color: black;
    /* text-align: justify; */
    padding: 5px 10px;
    height: 10em;
  }

  .purchase {
    height: 2.1em;
    font-size: 15px;
    font-weight: 600;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: whitesmoke;
    color: purple;
  }

  .purchase:hover {
    background: purple;
    color: whitesmoke;
    transition-duration: 0.4s;
  }
`;

export const CardBack = styled.div`
  display: flex;
  flex-direction: column;
  height: 29.29em;
  width: 17.5em;
  margin: 10px 3rem;
  border-radius: 5px;
  box-shadow: 6px 6px 12px gray;
  font-family: monospace;
  background: purple;

  p{
    height: 65%;
    font-size: 13px;
    padding: 5px 10px;
    font-weight: 550;
    border-bottom: solid 1px whitesmoke;
  }

  button{
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    height: 5%;
    font-weight: 600;
    color: purple;
  }

  button:hover{
    color: white;
    background: #363636;
  }
`;

export const InfosBack = styled.div`
  height: 96.5%;
  width: inherit;

  ul{
    font-size: 13px;
    padding: 5px 10px;
  }

  ul span{
    color: lightgrey;
    font-weight: 600;
  }

`;
