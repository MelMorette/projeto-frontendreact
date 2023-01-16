import { useState } from "react";

export default function useSearch() {
  const [searchText, setSearchText] = useState("");
  const [changeOrder, setChangeOrder] = useState("ordenar");
  const [valueMin, setValueMin] = useState(0);
  const [valueMax, setValueMax] = useState(999999);

  const resetFilters = () => {
    setSearchText("");
    setChangeOrder("ordenar");
    setValueMin(9);
    setValueMax(999999);
  };

  return {
    searchText,
    setSearchText,
    changeOrder,
    setChangeOrder,
    valueMin,
    setValueMin,
    valueMax,
    setValueMax,
    resetFilters
  };
}
