import React from "react";
import "./css/main.css";
import "typeface-roboto";
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";

const App = () => (
  <>
    <ToastContainer  position={toast.POSITION.TOP_RIGHT} />
    <Routes />
  </>
);

export default App;
