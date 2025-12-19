import { useNavigate } from "react-router-dom";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="error-body" style={{ textAlign: "center", padding: "2rem" }}>
      <WarningAmberIcon sx={{ fontSize: 60 }} />
      <h1>404</h1>
      <p>Página não encontrada</p>
      <button className="return-home" onClick={() => navigate("/")}>Voltar para a página inicial</button>
    </div>
  );
}
