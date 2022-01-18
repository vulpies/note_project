import React from "react"
import ReactDOM from "react-dom"
import "./style/style.css"
import "../node_modules/react-bootstrap/dist/react-bootstrap.min.js"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)
