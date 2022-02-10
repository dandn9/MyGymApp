import React, { useState, useContext } from "react";

import ExerciseProvider from "./src/Context/ExerciseProvider";

import App_InsideWrapper from "./src/App_InsideWrapper";
export default function App() {
  return (
    <ExerciseProvider>
      <App_InsideWrapper />
    </ExerciseProvider>
  );
}
