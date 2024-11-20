import { useState } from "react";
import { MemoryRouter } from "react-router-dom";
import { Routing } from "./pages/router";
import { Provider } from "react-redux";

import { PersistGate } from "@plasmohq/redux-persist/integration/react";
import { store, persistor } from "./reducer/store";

import "./style/style.scss";

function IndexPopup() {
  const [data, setData] = useState("");

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MemoryRouter>
          <Routing />
        </MemoryRouter>
      </PersistGate>
    </Provider>
  );
}

export default IndexPopup;
