import "./login.css";

export function Login() {
  return (
    <div className="container">
      <div className="formCard">
        <h1>Login</h1>
        <p className="subtitle">Faça login na sua conta!</p>
        <form className="formContainer" autoComplete="none">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              autoComplete="none"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              required
              autoComplete="none"
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
        <p className="footer">
          Não tem conta? <a href="/sign-in">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
}
