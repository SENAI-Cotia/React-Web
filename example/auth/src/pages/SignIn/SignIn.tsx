import "./signin.css";

export function SignIn() {
  return (
    <div className="container">
      <div className="formCard">
        <h1>Cadastro</h1>
        <p className="subtitle">Crie sua conta para acessar o sistema</p>
        <form className="formContainer">
          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" required />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input type="password" id="confirmPassword" required />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
        <p className="footer">
          Já tem conta? <a href="/">Faça login</a>
        </p>
      </div>
    </div>
  );
}
