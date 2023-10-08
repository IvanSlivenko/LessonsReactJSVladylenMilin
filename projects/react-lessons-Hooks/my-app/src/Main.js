import React from "react";

export default function Main({ toggle}) { 
    return (
        <div>
            <h1>Привіт в прикладі з Context</h1>
            <button onClick={ toggle} className="btn btn-success">Показати alert</button>
            

        </div>
    )
}