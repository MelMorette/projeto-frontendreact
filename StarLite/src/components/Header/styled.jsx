import styled from "styled-components";

export const MyHeader = styled.header`
  display: flex;
  flex-direction: column;
  background: whitesmoke;
  width: 100vw;
  height: 15em;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  color: grey;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const LoginUser = styled.div`
  display: flex;
  align-items: center;
  height: 3em;
  width: 100vw;
  border-bottom: solid 1px lightgrey;
  font-size: 1em;
  font-weight: 600;

  p {
    margin-left: 12%;
  }
  span {
    color: #860089;
  }
`;

export const LogoCart = styled.div`
  display: flex;
  align-items: center;
  height: 12em;
  width: 100vw;

  .logo-store {
    width: 50%;
  }

  .logo-store img {
    height: 7em;
    width: 20em;
    margin-left: 21%;
  }

  .icon-cart {
    display: flex;
    justify-content: center;
    width: 50%;
  }

  .icon-cart img {
    margin-right: 10px;
    width: 1.5em;
    height: 1.5em;
  }

  p span{
    position: relative;
    top: -15px;
    left: -5px;
    padding: 3px;
    background: purple;
    border-radius: 50%;
    color: white;
    font-size: 11px;
  }
`;
