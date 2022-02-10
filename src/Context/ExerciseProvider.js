import React, { useContext, useState } from "react";
import ExerciseContext from "./exercise-ctx";

const mockData = [
  {
    name: "Squat",
    weight: 58,
    reps: 10,
    sets: 4,
    id: 1,
  },
  {
    name: "Bench",
    weight: 48,
    reps: 12,
    sets: 5,
    id: 2,
  },
];

const ExerciseProvider = (props) => {
  const [items, setUseItems] = useState(mockData);

  const addItemHandler = (item) => {};
  const removeItemhandler = (id) => {};
  const updateItemHandler = (id, item) => {};

  const exerciseContext = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemhandler,
    updateItem: updateItemHandler,
  };

  return (
    <ExerciseContext.Provider value={exerciseContext}>
      {props.children}
    </ExerciseContext.Provider>
  );
};
export default ExerciseProvider;
