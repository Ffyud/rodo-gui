import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // FIXME HashRouter uiteindelijk vervangen, maar nu nog even nodig. Geeft "/#/" in URL in browser
    <React.StrictMode>
        <HashRouter> 
            <App />
        </HashRouter>
    </React.StrictMode>
);
