import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppLayout from "./pages/AppLayout.tsx";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <AppLayout />
      </Router>
    </>
  );
};

export default App;
