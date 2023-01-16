import React from "react";
import {
  MyFooter,
  LogoFooter,
  LogoTypes,
  InfosFooter,
  ReservedFooter
} from "./styled";
import logotipo from "../../assets/logotipo2.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import envelope from "../../assets/envelope.png";

export default function Footer() {
  return (
    <>
      <MyFooter>
        <LogoFooter>
          <img src={logotipo} alt="Logotipo Amy Developer" />
          <LogoTypes>
            <a
              href="https://www.linkedin.com/in/mellissa-morette/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Logotipo Linkedin" />
            </a>
            <a
              href="https://github.com/MelMorette"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="Logotipo Github" />
            </a>
            <a
              href="mailto:contatomellissamorette@gmail.com?subject="
              target="_blank"
              rel="noreferrer"
            >
              <img src={envelope} alt="Logotipo Email" />
            </a>
          </LogoTypes>
        </LogoFooter>
        <InfosFooter>
          <ul>
            <li>
              <h3>Suporte</h3>
            </li>
            <li>Contate-nos</li>
            <li>FAQ</li>
            <li>Política de cookies</li>
            <li>Termos e condições</li>
            <li>Política de privacidade</li>
          </ul>
        </InfosFooter>
        <InfosFooter>
          <ul>
            <li>
              <h3>Star Lite</h3>
            </li>
            <li>Sobre a Star Lite</li>
            <li>Star Lite Design</li>
            <li>Carreira</li>
            <li>Fornecedores</li>
            <li>Acesso a Star Lite</li>
          </ul>
        </InfosFooter>
        <ReservedFooter>
          <p>Copyright © 2023 Star Lite Company S.L. All rights reserved.</p>
        </ReservedFooter>
      </MyFooter>
    </>
  );
}
