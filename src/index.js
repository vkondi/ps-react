import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Docs from "./docs/Docs";
import '../node_modules/highlight.js/styles/ocean.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Docs />);
