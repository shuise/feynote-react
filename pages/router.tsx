import { Route, Routes } from "react-router-dom";

import Welcome from "~pages/welcome";

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Welcome />} />
  </Routes>
);
