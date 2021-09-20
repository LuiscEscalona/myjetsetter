import React, { useState } from "react";
import Item from "./Item.jsx";

function Items(props) {
  const [inputState, setInputState] = useState("");

  const handleChange = (event) => {
    setInputState(event.target.value);
  };

  let listaFiltrada = props.items;

  if (inputState.length > 0) {
    listaFiltrada = props.items.filter((i) => {
      if (i.value.toUpperCase().includes(inputState.toUpperCase())) {
        return true;
      }
    });
  }

  return (
    <div className="items-container">
      <h1>
        {props.title}({props.items.length})
      </h1>
      <input type="text" value={inputState} onChange={handleChange} />
      {listaFiltrada.map((item) => {
        return (
          <Item
            nombre={item.value}
            id={item.id}
            packed={item.packed}
            lista={props.lista}
            setLista={props.setLista}
          />
        );
      })}
    </div>
  );
}

export default Items;
