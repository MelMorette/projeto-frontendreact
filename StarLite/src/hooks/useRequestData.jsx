import { useState } from "react";

export default function useRequestData() {
  const initialState = {
    items: [
      {
        id: "0001",
        satellite: "Sputnik",
        price: 54390,
        description:
          "O Sputnik coleta dados sobre a densidade de camadas atmosféricas superiores, além de medir a qualidade dos sinais de rádio na ionosfera.",
        history:
          "O Sputnik foi o primeiro satélite artificial, isto é, o primeiro objeto posto pela humanidade em órbita ao redor de um corpo celeste, no caso a Terra. O pontapé da corrida espacial foi dado pela União Soviética ao colocar com segurança o primeiro satélite artificial na órbita da Terra. O lançamento ocorreu em um local que até hoje é usado para lançamentos espaciais russos.",
        image: "https://i.ibb.co/4psVdsw/sputnik.jpg",
        launchDate: "4 de outubro de 1957 às 7:28 da tarde",
        launchSite: "Plataforma Gagarin",
        manufacturer: "Energia",
        orbitHeight: "577 km"
      },
      {
        id: "0002",
        satellite: "Explorer 1",
        price: 47290,
        description:
          "A maior façanha do Explorer 1 é confirmar a existência dos cinturões de Van Allen, que são zonas de partículas carregadas que armazenam a radiação na magnetosfera.",
        history:
          "Os Estados Unidos lança seu primeiro satélite, que chegou à órbita da Terra em 31 de janeiro de 1958. A descoberta do Cinturão de Van Allen pelos satélites Explorer foi considerada como uma das excepcionais descobertas do Ano Geofísico Internacional.",
        image: "https://i.ibb.co/LkV26y1/explorer1.jpg",
        launchDate: "1 de fevereiro de 1958",
        launchSite: "Cape Canaveral Launch Complex 26",
        manufacturer: "Jet Propulsion Laboratory",
        orbitHeight: "1.454 km"
      },
      {
        id: "0003",
        satellite: "Explorer 6",
        price: 42098,
        description:
          "As principais funções do Explorer 6 é estudar a radiação das camadas superiores e determinar a frequência com que micrometeoritos penetravam nossa atmosfera.",
        history:
          "Lançado em agosto de 1959, em uma missão paralela fez a primeira imagem da Terra vista do espaço: um fotografia do México.",
        image: "https://i.ibb.co/B4dQLYM/explorer6.jpg",
        launchDate: "7 de agosto de 1959",
        launchSite: "Cape Canaveral Launch Complex 26",
        manufacturer: "Jet Propulsion Laboratory, TRW Inc.",
        orbitHeight: "836 km"
      },
      {
        id: "0004",
        satellite: "TIROS-1",
        price: 12903,
        description:
          "Possui funções meteorológicas, com duas câmeras acopladas que tira fotografias das nuvens sobre a Terra e envia os sinais via ondas de TV.",
        history:
          "É o primeiro satélite meteorológico de órbita terrestre baixa bem sucedido e o primeiro de uma série chamada de Television Infrared Observation Satellites. Ele foi lançado pela NASA e outros parceiros em 1 de Abril de 1960 a partir da Estação da Força Aérea de Cabo Canaveral as 6:40 EST, usando um foguete Thor-Able.",
        image: "https://i.ibb.co/gDpGwyq/tiros1.jpg",
        launchDate: "1 de abril de 1960 às 11:40 da manhã GMT",
        launchSite: "Space Launch Complex 17",
        manufacturer: "RCA Astro-Electronics",
        orbitHeight: "724 km"
      },
      {
        id: "0005",
        satellite: "Vostok 1",
        price: 11892,
        description:
          "Primeiro satélite com um homem a bordo. A frase: A Terra é azul!, de Yuri Gagarin, entrou para a história.",
        history:
          "O voo marcou a primeira vez que um ser humano foi ao espaço exterior e o primeiro voo orbital de uma nave tripulada. Ele consistiu de uma única órbita em torno da Terra, com a duração de 1h46min entre o lançamento e o pouso. Como planejado, após a reentrada Gagarin pousou separadamente da Vostok, sendo ejetado da nave a cerca de 7000 metros de altitude, descendo de pára-quedas na província de Saratov, Rússia.",
        image: "https://i.ibb.co/x3SKNqg/vostok1.jpg",
        launchDate: "12 de abril de 1961 06h06 UTC",
        launchSite: "Baikonur 1/5",
        manufacturer: "Programa Espacial Soviético",
        orbitHeight: "327 km"
      },
      {
        id: "0006",
        satellite: "Luna 10",
        price: 9283,
        description:
          "Mede o campo magnético, a radiação, a gravidade e outras funções de nosso satélite natural. Um espectrômetro de raios gama também coleta informações sobre a composição do solo de lá.",
        history:
          "Luna 10, também conhecida como Lunik 10, foi a designação de uma missão não tripulada conduzida pela União Soviética, composta por uma Espaçonave robótica que se tornou o primeiro satélite artificial da Lua.",
        image: "https://i.ibb.co/wNWN8Lq/luna10.jpg",
        launchDate: "31 de Março de 1966 as 10:48:00 UTC",
        launchSite: "Plataforma 31/6",
        manufacturer: "NPO Lavochkin (OKB-301)",
        orbitHeight: "1228 km"
      },
      {
        id: "0007",
        satellite: "Mariner 9",
        price: 60982,
        description:
          " É o primeiro satélite artificial Norte americano a orbitar um corpo celeste que não fosse a Lua. Enviou 7.329 fotos que permitiram a elaboração do primeiro mapa global de Marte.",
        history:
          "A NASA pretendia colocar duas sondas na órbita de Marte, mas a Mariner 8 fracassou. Assim, coube à Mariner 9 chegar sozinha ao Planeta Vermelho em 14 de novembro de 1971. Ela trabalhou dobrado, conseguiu cumprir as missões de ambas e mapeou 70% do solo marciano.",
        image: "https://i.ibb.co/3T4Ytfw/mariner8.jpg",
        launchDate: "30 de maio de 1971 às 22:23:00 UTC",
        launchSite: "Cape Canaveral Launch Complex 36",
        manufacturer: "NASA",
        orbitHeight: "912 km"
      },
      {
        id: "0008",
        satellite: "Venera 9",
        price: 95182,
        description:
          "Atua como um retransmissor de comunicação para o aterrizador explorar as camadas de nuvens e vários parâmetros atmosféricos.",
        history:
          "Outros satélites já haviam ido a Vênus antes de o soviético Venera 9 ser lançado, em 1975. A diferença é que as primeiras missões eram suicidas, com os equipamentos programados para breves voos ou até mergulhos diretos no planeta. O Venera 9 foi o primeiro a orbitar Vênus e enviar uma sonda à sua superfície.",
        image: "https://i.ibb.co/bm9pdVn/venera9.jpg",
        launchDate: "8 de Junho de 1975",
        launchSite: "Proton-K + Blok D-1",
        manufacturer: "Programa Espacial Soviético",
        orbitHeight: "981 km"
      },
      {
        id: "0009",
        satellite: "Telescópio Espacial Hubble",
        price: 97632,
        description:
          "O Telescópio Espacial Hubble é um satélite artificial não tripulado que transporta um grande telescópio para luz visível e infravermelha.",
        history:
          "Apesar de não ter sido o primeiro telescópio espacial lançado, o Hubble marcou uma nova era na pesquisa espacial, incluindo estudos de longo prazo. Ele foi lançado em 1990 e registrou algumas das mais famosas imagens do Universo, como a dos Pilares da Criação, na nebulosa da Águia. Após 3 décadas, ele segue operante.",
        image: "https://i.ibb.co/F8P09hZ/hubble.jpg",
        launchDate: " 24 de abril de 1990, 12:33:51 UTC",
        launchSite: "Centro Espacial John F. Kennedy, LC-39B",
        manufacturer: "NASA",
        orbitHeight: "600 km"
      },
      {
        id: "0010",
        satellite: "Galileo",
        price: 29742,
        description:
          "Galileo é a primeira sonda a orbitar o maior planeta do Sistema Solar, em 1995. Ele pesquisa a história geológica e as luas do gigante gasoso.",
        history:
          "Galileo ou Galileu é o sistema de navegação por satélite da União Europeia. Concebido desde o início como um projecto civil, em oposição ao GPS americano, ao GLONASS russo e ao Compass chinês que são de origem militar, tendo várias vantagens: maior precisão, maior segurança e menos sujeito a problemas.",
        image: "https://i.ibb.co/bd1YGKb/galileo.jpg",
        launchDate: "1 de abril de 1960 às 11:40 da manhã GMT",
        launchSite: "Space Launch Complex 17",
        manufacturer: "RCA Astro-Electronics",
        orbitHeight: "724 km"
      },
      {
        id: "0011",
        satellite: "Estação Espacial Internacional",
        price: 198284,
        description:
          "(EEI) é um laboratório, observatório, fábrica e fornecedor de transporte, manutenção e atuar como base de preparação para possíveis futuras missões para a Lua, Marte e asteroides.",
        history:
          "É um laboratório espacial completamente concluído, cuja montagem em órbita começou em 1998 e terminou oficialmente em 8 de julho de 2011 na missão STS-135, com o ônibus espacial Atlantis. A estação encontra-se em uma órbita baixa de 408 x 418 km, que possibilita ser vista da Terra a olho nu, e viaja a uma velocidade média de 27 700 km/h, completando 15,70 órbitas por dia.",
        image: "https://i.ibb.co/fv7rSSY/espacialinternacional.jpg",
        launchDate: "20 de novembro de 1998 06:40:27 GMT",
        launchSite: "Módulo Zarya",
        manufacturer: "NASA",
        orbitHeight: "340,5 km"
      },
      {
        id: "0012",
        satellite: "Cassini",
        price: 21871,
        description:
          "Cassini fornece dados preciosos sobre o planeta dos anéis (Saturno), bem como de suas diversas luas, inclusive a descoberta de enormes gêiseres de água gelada em Encélado.",
        history: "A Cassini-Huygens integra o Programa Flagship para os planetas exteriores, o maior e mais caro programa espacial não-tripulado da Agência Espacial Estadunidense. As outras missões deste programa incluem as Viking, as Voyager e a Galileu. A espaçonave de duas partes foi batizada em homenagem aos astrônomos Giovanni Cassini e Christiaan Huygens.",
        image: "https://i.ibb.co/yV5hq5v/cassini.jpg",
        launchDate: "1 de abril de 1960 às 11:40 da manhã GMT",
        launchSite: "Space Launch Complex 17",
        manufacturer: "RCA Astro-Electronics",
        orbitHeight: "724 km"
      },
      {
        id: "0013",
        satellite: "MESSENGER",
        price: 12982,
        description: "MESSENGER fornece informações geológicas, como a presença de enxofre, que pode estar ligada ao vulcanismo do planeta Mercúrio.",
        history: "Os cientistas da missão foram surpreendidos com a descoberta de água na exosfera do planeta, através da análise de dados enviados pela sonda. Além disso, os dados da MESSENGER enviaram provas de vulcanismo na superfície, com a descoberta de ejecta proveniente de lava vulcânica, através das imagens de alta definição da sonda e a evidência da existência de um núcleo líquido em Mercúrio.",
        image: "https://i.ibb.co/5hknMJq/messenger.jpg",
        launchDate: "3 de agosto de 2004, 06:15:56 UTC",
        launchSite: "Cabo Canaveral, SLC-17",
        manufacturer: "NASA",
        orbitHeight: "200 km"
      },
      {
        id: "0014",
        satellite: "Rosetta",
        price: 89230,
        description: "Foi a primeira a orbitar um cometa, o 67P/Churyumov-Gerasimenko. Transmitiu informações da cauda, de um pequeno módulo de pouso e dados da superfície do objeto.",
        history: "Lançada no topo de um foguete Ariane 5 G+, a sonda atingiu seu alvo na metade de 2014. A nave compreendia duas partes, a sonda espacial Rosetta, que carregava 11 instrumentos, e o pousador-robótico Philae, que transportava mais dez. Foi construída para fazer o mais detalhado estudo de um cometa até então.",
        image: "https://i.ibb.co/YpzxjYK/rosetta.jpg",
        launchDate: "2 de março de 2004, 07:17:51 UTC",
        launchSite: "ELA-3, Centro Espacial de Kourou",
        manufacturer: "Astrium",
        orbitHeight: "724 km"
      },
      {
        id: "0015",
        satellite: "Starlink",
        price: 13725,
        description:
          "Tem o intuito de oferecer banda larga a qualquer ponto da Terra.",
        history:
          "A Space X começou a lançar o projeto Starlink em 2019. Trata-se da maior constelação artificial já criada, com a liberação de 12 mil satélites — e a companhia espera aumentar o número para 48 mil.",
        image: "https://i.ibb.co/7gngntT/starlink.jpg",
        launchDate: "24 de maio de 2019",
        launchSite: "ELA-3, Centro Espacial de Kourou",
        manufacturer: "SpaceX",
        orbitHeight: "480 km"
      },
      {
        id: "0016",
        satellite: "SCD-1",
        price: 76212,
        description: "Tem a função de realizar a coleta de dados ambientais para serem depois captados por estações rastreadoras e serem distribuídos a organizações e a usuários diversos.",
        history: "Em 25 de outubro de 2005 o satélite SCD-1 alcançou o significativo número de 67.011 órbitas em operação, recebeu de solo um total de aproximadamente 161 900 telecomandos e sofreu a execução de 16 manobras de reorientação de seu eixo de rotação. O primeiro satélite brasileiro foi para o espaço em 1993 com expectativa inicial de um ano de vida útil, mas já superou esse limite em 1200%.",
        image: "https://i.ibb.co/51rMxzg/scd1.jpg",
        launchDate: "9 de fevereiro de 1993 às 3:30 da tarde CET",
        launchSite: "Centro Espacial Kennedy",
        manufacturer: "Inpe",
        orbitHeight: "724 km"
      }
    ]
  };

  const [listSatellite, setListSatellite] = useState(initialState);

  return {
    listSatellite,
    setListSatellite
  };
}
