import "./App.css";

import Exemplo1 from "./Paginas/Exemplo1";

import Exemplo2 from "./Paginas/Exemplo2";

import Exe1 from "./Paginas/Exe1.jsx";

import Exe2 from  "./Paginas/Exe2.jsx";

import Exe3 from  "./Paginas/Exe3.jsx";

import Exe4 from  "./Paginas/Exe4.jsx";

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
          <h3>Chamada para o Exercicio 1</h3>
          <Exe1 numero={100} />
          <Exe1 numero={0} />
          <Exe1 numero={32} />
      </div>

      <div className="card">
  <h3>Chamadas para o componente Exercicio 2</h3>

  <Exe2 peso={78} altura={178} />

  <Exe2 peso={60} altura={160} />

 </div>

 <div className="card">

 <h3>Chamadas para o componente Exercicio 3</h3>

<Exe3 nota1={9.0} nota2={7.0} />

<Exe3 nota1={6.0} nota2={10} />

 </div>

 <div className="card">

<h3>Chamadas para o componente Exercicio 4</h3>

<Exe4 base={200} altura={100} />

<Exe4 base={180} altura={90} />

</div>



    </div>



    
  )
}