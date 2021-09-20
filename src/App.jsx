import React, { useState } from "react";
import "./App.css";
import { defaultState } from "./consts/products.js";
import Items from "./Items.jsx";
import { obtenerItemsPorCategoria } from "./utils";
import uniqueId from "lodash/uniqueId";

function App() {
  const [state, setState] = useState("");

  const [lista, setLista] = useState(defaultState);

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let nuevoItem = {
      value: state,
      id: uniqueId(),
      packed: false,
    };
    let nuevaLista = [...lista, nuevoItem];
    setLista(nuevaLista);
  };

  const handleButton = () => {
    let listaTodoDesempacado = lista.map((item) => {
      return {
        ...item,
        packed: false,
      };
    });
    setLista(listaTodoDesempacado);
  };

  const listaEmpacados = obtenerItemsPorCategoria(lista, "packed", true);
  const unpackedList = obtenerItemsPorCategoria(lista, "packed", false);

  return (
    <div className="app-container">
      <div className="form-container">
        <form>
          <label>
            <input
              className="textTopBar"
              type="text"
              value={state}
              onChange={handleChange}
            />
          </label>
          <input
            className="submitTopBar"
            onClick={handleSubmit}
            type="submit"
            value="Submit"
          />
        </form>
        <Items
          title="Items no empacados"
          items={unpackedList}
          lista={lista}
          setLista={setLista}
        />
        <Items
          title="Items empacados"
          items={listaEmpacados}
          lista={lista}
          setLista={setLista}
        />

        <div>
          <button className="btn-marcar-todos" onClick={handleButton}>
            {" "}
            Marcar todos como desempacados{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
