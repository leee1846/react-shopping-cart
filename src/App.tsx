import React, { useState } from "react";
import { useQuery } from "react-query";
//components
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
//styles
import { Wrapper } from "./App.styled";

const getProducts = async () =>
  await (await fetch(`https://fakestoreapi.com/products`)).json();

const App = () => {
  return (
    <div>
      <h1>ss</h1>
    </div>
  );
};

export default App;
