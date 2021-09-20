import uniqueId from "lodash/uniqueId";

export const defaultState = [
  { value: "Pantalon", id: uniqueId(), packed: false },
  { value: "Chaqueta", id: uniqueId(), packed: false },
  { value: "Cargador de telefono", id: uniqueId(), packed: false },
  { value: "MacBook", id: uniqueId(), packed: false },
  { value: "Pastillas", id: uniqueId(), packed: true },
  { value: "Ropa interior", id: uniqueId(), packed: false },
  { value: "Sombrero", id: uniqueId(), packed: false },
  { value: "Cinturon", id: uniqueId(), packed: false },
  { value: "Pasaporte", id: uniqueId(), packed: true },
  { value: "Sandwich", id: uniqueId(), packed: true },
];
