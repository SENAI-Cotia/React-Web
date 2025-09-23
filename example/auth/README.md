# Sistema de Autenticação - Projeto Base

Este é um projeto base para implementação de um sistema de autenticação usando React. O objetivo desta atividade é que os alunos implementem a lógica de autenticação utilizando as bibliotecas **React Hook Form**, **Axios** e **React Router DOM**.

## 🎯 Objetivo da Atividade

Os alunos devem implementar:
- Formulários de login e cadastro com validação usando React Hook Form
- Comunicação com API usando Axios
- Navegação protegida com React Router DOM

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca principal para criação da interface
- **TypeScript** - Tipagem estática para JavaScript
- **React Router DOM** - Roteamento e navegação
- **Vite** - Build tool e servidor de desenvolvimento

### Bibliotecas que devem ser instaladas pelos alunos:
- **React Hook Form** - Para gerenciamento e validação de formulários
- **Axios** - Para requisições HTTP
- **@hookform/resolvers** e **Zod** - Para validação de esquemas (opcional)

## 📁 Estrutura do Projeto

```
src/
├── pages/
│   ├── Login/
│   │   ├── Login.tsx      # Formulário de login (implementar lógica)
│   │   └── login.css      # Estilos do login
│   ├── SignIn/
│   │   ├── SignIn.tsx     # Formulário de cadastro (implementar lógica)
│   │   └── signin.css     # Estilos do cadastro
│   └── Home/
│       ├── Home.tsx       # Página protegida após login
│       └── home.css       # Estilos da home
├── App.tsx                # Componente principal
├── routes.tsx             # Configuração das rotas
└── main.tsx              # Ponto de entrada da aplicação
```

## 🔧 Como executar o projeto

1. **Clone o repositório**
```bash
git clone [url-do-repositorio]
cd auth
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 📋 Atividades a serem implementadas

### 1. Instalação das dependências necessárias
```bash
npm install react-hook-form axios
# Opcional para validação:
npm install @hookform/resolvers zod
```

### 2. Implementar o formulário de Login (`src/pages/Login/Login.tsx`)
- [ ] Configurar React Hook Form
- [ ] Adicionar validações (email obrigatório, senha obrigatória)
- [ ] Implementar submit do formulário
- [ ] Fazer requisição de login via Axios
- [ ] Redirecionar para /home em caso de sucesso
- [ ] Exibir mensagens de erro

### 3. Implementar o formulário de Cadastro (`src/pages/SignIn/SignIn.tsx`)
- [ ] Configurar React Hook Form
- [ ] Adicionar validações (todos os campos obrigatórios, confirmação de senha)
- [ ] Implementar submit do formulário
- [ ] Fazer requisição de cadastro via Axios
- [ ] Redirecionar para login ou home após sucesso

### 4. Implementar proteção de rotas
- [ ] Criar contexto de autenticação
- [ ] Implementar verificação de token/sessão
- [ ] Proteger a rota `/home`
- [ ] Redirecionar usuários não autenticados para login

### 5. Implementar logout (`src/pages/Home/Home.tsx`)
- [ ] Conectar botão "Sair" à lógica de logout
- [ ] Limpar dados de autenticação
- [ ] Redirecionar para a página de login


## 💡 Dicas de implementação

1. **React Hook Form**:
   ```tsx
   import { useForm } from 'react-hook-form';

   const { register, handleSubmit, formState: { errors } } = useForm();
   ```

2. **Axios configuração**:
   ```tsx
   import axios from 'axios';

   const api = axios.create({
     baseURL: 'https://sua-api.com'
   });
   ```


## 📚 Recursos úteis

- [React Hook Form Documentation](https://react-hook-form.com/)
- [Axios Documentation](https://axios-http.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Zod Validation](https://zod.dev/) (opcional)

## 📝 Entrega

Ao finalizar a implementação, certifique-se de que:
- [ ] Todos os formulários funcionam corretamente
- [ ] Validações estão implementadas
- [ ] Navegação entre páginas funciona
- [ ] Sistema de autenticação está completo
- [ ] Logout funciona corretamente
- [ ] Código está bem documentado
