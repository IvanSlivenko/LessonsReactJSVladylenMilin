import React from "react";
import { useAlertToggle } from "./alert/AlertContext";

export default function Main({}) { 
    const toggle=useAlertToggle()
    return (
        <div>
            <h1>Привіт в прикладі з Context</h1>
            <button onClick={ toggle} className="btn btn-success">Показати alert</button>
            

        </div>
    )
}