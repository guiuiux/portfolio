import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.success) {
      navigate("/admin/dashboard"); // 👈 redireciona direto
    } else {
      setError(data.error || "Erro de login");
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-surface-container p-6 rounded-xl shadow-md w-80 flex flex-col gap-4"
      >
        <h1 className="text-xl font-bold text-primary">Admin Login</h1>
        {error && <p className="text-error">{error}</p>}
        <input
          type="text"
          placeholder="Usuário"
          className="border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-primary text-white rounded p-2 font-semibold"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
