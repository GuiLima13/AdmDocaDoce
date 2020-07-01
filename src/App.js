import React,{useState} from 'react';
function App() {
    const [nome,setNome] = useState();
    const [email,setEmail] = useState();
    const [senha,setSenha] = useState();
    const [telefone,setTelefone] = useState();
    const [cpf,setCPF] = useState();

    const  handleClick = async (e)=>{
      e.preventDefault();

      const info = JSON.stringify({
        nome,
        email,
        senha,
        telefone,
        cpf,
    })
    try{
      const resposta = await fetch("http://apidocadoce.herokuapp.com/usuario",
      {
          headers:{
              "Content-Type":["application/json", 'Authorization'],
              
          },
          method:"POST",
          body:info
      }
      
    );
    if(resposta.status === 201){
      alert("Cadastrado com sucesso")
      setNome("");
      setCPF("");
      setEmail("");
      setTelefone("");
      setSenha("");
    }else{
      alert("Não foi possivel cadastrar item")
  }

    }catch(e){
    }
   

 
    }
  return (
    <div className="App">
      <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Email</label>
      <input type="email" onChange={(e)=>(setEmail(e.target.value))} className="form-control" id="inputEmail4"></input>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Password</label>
      <input type="password" onChange={(e)=>(setSenha(e.target.value))} className="form-control" id="inputPassword4"></input>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Nome</label>
    <input type="text" onChange={(e)=>(setNome(e.target.value))} className="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Telefone</label>
    <input type="text" onChange={(e)=>(setTelefone(e.target.value))} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">cpf</label>
      <input type="text" onChange={(e)=>(setCPF(e.target.value))} className="form-control" id="inputCity"></input>
    </div>
  </div>
  <button type="submit" onClick={handleClick} className="btn btn-primary">Sign in</button>
</form>
    </div>
  );
}

export default App;
