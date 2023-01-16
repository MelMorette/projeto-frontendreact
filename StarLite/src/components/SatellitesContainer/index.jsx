import React, { useState } from "react";
import { CardFront, CardBack, InfosBack } from "./styled";

export function SatellitesContainer({ item, addCart }) {
  const { satellite, price, description, history, image, launchDate, launchSite, manufacturer, orbitHeight } = item;
  const [card, setCard] = useState(1);

 

  return card === 1 ? (
    <>
      <CardFront>
        <img src={image} alt="imagem de um satélite" />
        <div className="price-info">
          <p className="price">U$ {price}</p>
          <button onClick={() => setCard(2)} className="info">
            +Infos
          </button>
        </div>
        <p className="satellite">{satellite}</p>
        <p className="description">{description}</p>
        <button onClick={() => addCart(item)} className="purchase">
          Adicionar ao Carrinho
        </button>
      </CardFront>
    </>
  ) : (
    <CardBack>
      <InfosBack>
        <p>{history}</p>
        <ul>
          <li><span>Data Lançamento:</span> {launchDate}</li>
          <li><span>Local Lançamento:</span> {launchSite}</li>
          <li><span>Fabricante:</span> {manufacturer}</li>
          <li><span>Altura Óbrita:</span> {orbitHeight}</li>
        </ul>
      </InfosBack>
        <button onClick={() => setCard(1)}>Voltar</button>
    </CardBack>
  );
}
