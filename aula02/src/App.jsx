import "./App.css";

import Exemplo1 from "./Paginas/Exemplo1";

import Exemplo2 from "./Paginas/Exemplo2";

import Exe1 from "./Paginas/Exe1.jsx";

export default function App()
{
  return (
    <div>
      <h1>Aula 02 - Estudo de Componentes e Props</h1>

      <div className="card">
        <h3>Chamada para o Exemplo 1</h3>
            <Exemplo1 numero={33} />
            <Exemplo1 numero={43} />
            <Exemplo1 numero={3} />
      </div>

      <div className="card">
          <h3>Chamada para o Exemplo 2</h3>
          <Exemplo2 numero1={33} numero2={34} />
          <Exemplo2 numero1={20} numero2={22} />
      </div>

      <div className="card">
          <h3>Chamada para o Exemplo 3</h3>
          <Exe1 numero={100} />
          <Exe1 numero={0} />
          <Exe1 numero={32} />
      </div>

    </div>
  )
}