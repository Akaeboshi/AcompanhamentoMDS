import userEvent from '@testing-library/user-event';
import { useState, useEffect } from 'react';
import Nome from './components/Nome';

function App(){
  const[aluno, setAluno] = useState('Momento')

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [profissao, setProfissao] = useState('');

  const [user, setUser] = useState({});


  useEffect(()=>{
    localStorage.setItem('@nome', JSON.stringify(nome))
  }, [nome]);

  useEffect(()=>{
    localStorage.setItem('@idade', JSON.stringify(idade))
  }, [idade]);

  useEffect(()=>{
    localStorage.setItem('@profissao', JSON.stringify(profissao))
  }, [profissao]);

  useEffect(()=>{
    const nomeStorage = localStorage.getItem('@nome');

    if(nomeStorage){
      setNome(JSON.parse(nomeStorage))
    }

  },[]);

  function trocaNomes(nomeTrocar){
    setAluno(nomeTrocar);
  }

  function handleRegister(e){
    alert('Registrado com sucesso');
    e.preventDefault();
    
    setUser({
      nome: nome,
      idade: idade,
      profissao: profissao,
    })
  }

  return(
    <div>
      <h1>Componente App</h1><br/>
      <h2>Olá: {aluno} </h2>
      <button onClick={ ()=> trocaNomes('Lucas Heler')}>
        Mudar Nome
      </button><br/>
      <h1>Cadastrar usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome: </label><br/>
        <input 
        placeholder="Digite seu nome"
        value={nome}
        onChange={ (e) => setNome(e.target.value)}
        />
        <br/><label>Idade: </label>
        <br/> <input placeholder="Digite sua idade"
        value={idade}
        onChange={ (e) => setIdade(e.target.value)}
        />
        <br/> <label>Profissão: </label><br/>
        <input placeholder="Digite sua profissão"
        value={profissao}
        onChange={ (e) => setProfissao(e.target.value)}
        /><br/><br/>
        <button type="submit">Registrar</button>
      </form>
      

      <br/>
      <span>Bem vindo: {user.nome}</span><br/>
      <span>Idade: {user.idade}</span><br/>
      <span>Profissão: {user.profissao}</span><br/>
<br/>
    </div>
  );
}

export default App;


