import ReactDOM from "react-dom/client";

import App from "./components/app/App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
