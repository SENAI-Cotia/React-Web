import { useForm } from "react-hook-form";
import "./signin.css";
import { RegisterSchema, type RegisterData } from "../../types/auth";
import { zodResolver } from "@hookform/resolvers/zod";

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  function onSubmit(data: RegisterData) {
    console.log(data);
  }

  return (
    <div className="container">
      <div className="formCard">
        <h1>Cadastro</h1>
        <p className="subtitle">Crie sua conta para acessar o sistema</p>
        <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              required
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="errorMessage">{errors.name.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="errorMessage">{errors.email.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              required
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="errorMessage">{errors.password.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              type="password"
              id="confirmPassword"
              required
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && (
              <span className="errorMessage">
                {errors.confirmPassword.message}
              </span>
            )}
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
