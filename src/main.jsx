import  ReactDOM  from "react-dom/client";
import { App } from "../app";

const root = ReactDOM.createRoot(document.querySelector('#root'));
console.log(root)

root.render(<App />)