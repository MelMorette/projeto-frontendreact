import styled from "styled-components";

export const MyMain = styled.main`
  display: flex;
  flex-direction: column;
  width: inherit;
  height: 150em;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

`;

export const Parceiros = styled.div`
  display: flex;
  background: purple;
  width: inherit;
  height: 5em;
  justify-content: space-evenly;
  align-items: center;

  a,p{
    font-size: 130%;
    font-weight: 500;
    color: white;
  }

  a p span {
    font-size: 12px;
  }
`;

export const Fundo = styled.div`
  height: 30em;
  width: 100vw;

  img {
    width: 100vw;
    height: inherit;
  }
`;

export const Gadgets = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10em;
  width: 100%;
  font-size: 0.8em;
  color: grey;

  img {
    width: 3.5em;
    height: 3.5em;
    border: solid 2px #860089;
    border-radius: 50%;
    margin: 20px;
    padding: 4px;
  }

  span {
    color: purple;
    font-size: 1.2em;
    font-weight: 700;
  }
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: whitesmoke;
  height: 4em;
  width: 100vw;
  border-top: solid 2px lightgrey;
  position: sticky;
  top: 210px;
  z-index: 1;

  input,
  select,
  button {
    width: 13vw;
    height: 3em;
    border-radius: 5px;
    border: none;
    background: lightgrey;
    font-weight: 600;
    padding-left: 15px;
    margin: 25px;
    font-size: 12px;
  }
`;

export const Satellites = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: white;
  height: 140em;
  background-image: url("https://static.vecteezy.com/system/resources/previews/004/401/846/non_2x/seamless-pattern-of-space-objects-black-and-white-repeat-background-with-planet-star-spaceship-satellite-moon-sun-asteroid-good-for-wallpaper-coloring-page-for-kids-vector.jpg");
  background-color: rgba(10, 23, 55, 1);
  background-size: 30%;
  color: white;
  position: relative;
  z-index: 0;

  ::after {
    content: "";
    background-color: lightgrey;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.7;
    z-index: -1;
  }
`;
