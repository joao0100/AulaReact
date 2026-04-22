import "./App.css";

export default function App()
{
  let nome, idade, dias;
  nome = "João Gabriel";
  idade = 47;
  dias = idade * 365;

  return (
    <div>

      <h1>Olá Mundo !!!</h1>

<div className="conteudo">

  <p>Olá, sejá bem vindo ao React com JS.</p>
  <p>O aluno {nome} já viveu {idade} dias.</p>

</div>

    </div>
  )
}