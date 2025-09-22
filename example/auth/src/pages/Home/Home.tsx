import "./home.css";

export function Home() {
  return (
    <div className="container">
      <div className="homeContainer">
        <header className="homeHeader">
          <h1>Bem-vindo ao Sistema</h1>
          <p>Você está logado com sucesso!</p>
        </header>

        <div className="cardsGrid">
          <div className="card">
            <h3>Dashboard</h3>
            <p>Veja suas estatísticas e dados principais</p>
          </div>

          <div className="card">
            <h3>Perfil</h3>
            <p>Gerencie suas informações pessoais</p>
          </div>

          <div className="card">
            <h3>Configurações</h3>
            <p>Personalize sua experiência</p>
          </div>
        </div>

        <div className="logoutSection">
          <button className="logoutButton">Sair</button>
        </div>
      </div>
    </div>
  );
}
