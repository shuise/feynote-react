import React from "react";
import ReactDOM from "react-dom/client";
import type { PlasmoRender } from "plasmo";

import Injector from "./content/injector";

export const getRootContainer = () => document.getElementById("FeynmanWrapper");

export const render: any = async ({
  anchor, // the observed anchor, OR document.body.
  createRootContainer, // This creates the default root container
}) => {
  const rootContainer = await createRootContainer();

  const root = ReactDOM.createRoot(rootContainer); // Any root
  root.render(<Injector />);
};
