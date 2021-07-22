import { StatusBar } from "expo-status-bar";
import React from "react";
import MainScreen from "./screen/index";

const App = () => (
  <>
    <StatusBar style="auto" backgroundColor="black" />
    <MainScreen />
  </>
);

export default App;
