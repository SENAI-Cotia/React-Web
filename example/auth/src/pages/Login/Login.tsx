import { useForm } from "react-hook-form";
import "./login.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type LoginData } from "../../types/auth";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  function onSubmit(data: LoginData) {
    console.log(data);
  }

  return (
    <div className="container">
      <div className="formCard">
        <h1>Login</h1>
        <p className="subtitle">Faça login na sua conta!</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="formContainer"
          autoComplete="none"
        >
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              autoComplete="none"
              {...register("email", { required: true })}
              required
            />
            {errors.email && (
              <span className="errorMessage">{errors.email.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              required
              {...register("password", { required: true })}
              autoComplete="none"
            />
            {errors.password && (
              <span className="errorMessage">{errors.password.message}</span>
            )}
          </div>
          <button type="submit" disabled={isSubmitting}>
            Entrar
          </button>
        </form>
        <p className="footer">
          Não tem conta? <a href="/sign-in">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
}
