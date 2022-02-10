import React from "react";
const ExerciseContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  updateItem: (id, changes) => {},
});
export default ExerciseContext;
