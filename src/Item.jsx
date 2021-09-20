import { borrarElementoLista } from "./utils";
import "./App.css";

function Item(props) {
  const manejarCheckbox = () => {
    let nuevaLista = props.lista.map((i) => {
      if (props.id === i.id) {
        return {
          ...i,
          packed: !props.packed,
        };
      }
      return i;
    });
    props.setLista(nuevaLista);
  };

  const manejadorDeClick = () => {
    const nuevaLista = borrarElementoLista(props.lista, props.id);
    props.setLista(nuevaLista);
  };

  return (
    <div className="item-container">
      <input
        checked={props.packed}
        onChange={manejarCheckbox}
        type="checkbox"
        className="checkbox-item"
      />
      <div className="item-texto">{props.nombre}</div>
      <button onClick={manejadorDeClick} className="btn-remover-item">
        Remover
      </button>
    </div>
  );
}

export default Item;
