import styled from "styled-components";

export const MyFooter = styled.footer`
  display: flex;
  background: #1c1c1c;
  height: 15em;
  width: 100vw;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  font-weight: 600;
`;

export const LogoFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  height: 80%;
  width: 35%;
  border-right: solid 1px whitesmoke;

  img {
    height: 35%;
    width: 38%;
  }
`;

export const LogoTypes = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 60%;
  margin-top: 20px;

  img {
    width: 40%;
    margin: 25%;
  }
`;

export const InfosFooter = styled.footer`
  display: flex;
  justify-content: center;
  height: 80%;
  width: 20%;
  margin-top: 20px;

  h3 {
    margin-bottom: 17px;
    color: #dda0dd;
  }
`;

export const ReservedFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 47%;
  margin-top: 20px;
  border-left: solid 1px whitesmoke;
`;
