import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const [stats, setStats] = useState<{ granted: number; denied: number }>({
    granted: 0,
    denied: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/stats.php")
      .then((res) => {
        // stats.php requires the admin session set by login.php
        if (res.status === 401) {
          navigate("/admin");
          return null;
        }
        return res.json();
      })
      .then((data) => data && setStats(data))
      .catch((err) => console.error("Erro ao carregar estatísticas:", err));
  }, [navigate]);

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Painel de Consentimento
      </h1>
      <div className="bg-surface-container p-6 rounded-xl shadow-lg w-full max-w-md">
        <p className="text-lg">
          ✅ Aceitaram: <span className="font-bold">{stats.granted}</span>
        </p>
        <p className="text-lg">
          ❌ Negaram: <span className="font-bold">{stats.denied}</span>
        </p>
      </div>
    </div>
  );
}
