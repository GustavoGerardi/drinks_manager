'use client'

import { useState } from "react";

export default function Teste() {
    const [name, setName] = useState("Teste");

    // useEffect(() => {
        
    // },[])

    return (
      <div>
        <h1>Teste</h1>
        <a href="/" className="back-link">
          Voltar ao shell
        </a>
        <br />
        <button onClick={() => setName("Gustavo Gerardi de Faria")}>
          Mude o nome do state
        </button>
        <h1>{name}</h1>
      </div>
    );
}
