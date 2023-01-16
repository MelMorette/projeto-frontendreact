import React from "react";
import { MyMain, Parceiros, Fundo, Gadgets, Inputs, Satellites } from "./styled";
import fundo from "../../assets/fundo.png";
import desconto from "../../assets/desconto.png";
import frete from "../../assets/free.png";
import card from "../../assets/card.png";
import satelite from "../../assets/satelite.png";
import { SatellitesContainer } from "../SatellitesContainer/index";

export default function Main({ listSatellites, search, addCart }) {
  return (
    <>
      <MyMain>
        <Parceiros>
          <a href="https://viagens-espaciais-arthur-felix.surge.sh/" target="_blank" rel="noreferrer"><p>Viagens Espaciais <br/> <span>by Arthur Felix</span></p></a>
          <a href="https://sable-jewel.surge.sh/" target="_blank" rel="noreferrer"><p>Camisetas <br/> <span>by Camila Ketlen</span></p></a>
          <a href="https://spacetoystorepedrooliveira.surge.sh/" target="_blank" rel="noreferrer"><p>Brinquedos <br/> <span>by Pedro Henrique</span></p></a>
          <a href="" target="_blank" rel="noreferrer"><p>Funkos <br/> <span>by Guilherme Dias</span></p></a>
        </Parceiros>

        <Fundo>
          <img src={fundo} alt="Foto de Satélite" />
        </Fundo>

        <Gadgets>
          <img src={desconto} alt="Desconto" />
          <ul>
            <li>
              <span>Descontos</span>
            </li>
            <li>Os melhores descontos do mercado!</li>
          </ul>

          <img src={satelite} alt="Produtos" />
          <ul>
            <li>
              <span>Produtos</span>
            </li>
            <li>Produtos originais!</li>
          </ul>

          <img src={frete} alt="Frete Grátis" />
          <ul>
            <li>
              <span>Frete Grátis</span>
            </li>
            <li>Frete grátis em todo Brasil!</li>
          </ul>

          <img src={card} alt="Parcelamentos" />
          <ul>
            <li>
              <span>Parcelamentos</span>
            </li>
            <li>Parcele em até 3x sem juros!</li>
          </ul>
        </Gadgets>
        <Inputs>
          <input
            type="search"
            onChange={(e) => search.setSearchText(e.target.value)}
            placeholder="Buscar por nome, modelo... 🔎"
          />
          <select onChange={(e) => search.setChangeOrder(e.target.value)}>
            <option value="order">Ordenar</option>
            <option value="growing">A - Z</option>
            <option value="descending">Z - A</option>
          </select>
          <input
            type="number"
            min="0"
            max="999999"
            step="any"
            onChange={(e) => search.setValueMin(e.target.value)}
            placeholder="Valor Mínimo 🔎"
          />
          <input
            type="number"
            min="0"
            max="999999"
            step="any"
            onChange={(e) => search.setValueMax(e.target.value)}
            placeholder="Valor Máximo 🔎"
          />
          <button onClick={() => search.resetFilters()}>Redefinir</button>
        </Inputs>
        <Satellites>
          {listSatellites
            .filter((item) => {
              return item.satellite
                .toUpperCase()
                .includes(search.searchText.toUpperCase());
            })
            .filter((item) => {
              return (
                item.price >= +search.valueMin && item.price <= +search.valueMax
              );
            })
            .sort((itemA, itemZ) => {
              if (search.changeOrder === "order") {
                return itemA.id.localeCompare(itemZ.id);
              } else if (search.changeOrder === "growing") {
                return itemA.satellite.localeCompare(itemZ.satellite);
              } else if (search.changeOrder === "descending") {
                return itemZ.satellite.localeCompare(itemA.satellite);
              }
            })
            .map((item) => {
              return (
                <SatellitesContainer
                  key={item.id}
                  item={item}
                  addCart={addCart}
                />
              );
            })}
        </Satellites>
      </MyMain>
    </>
  );
}
