import { useEffect, useState } from "react";
import banner from "../assets/banner.png";
import items from '../items.json'
import Item from "../components/Item";
import SearchBar from "../components/SearchBar";
import { useNavigate } from 'react-router-dom';
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Tooltip from "@mui/material/Tooltip";


export default function Items() {
  const navigate = useNavigate();
  const [itemList, setItemList] = useState(items.items);
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  const hasItems = itemList && itemList.length > 0;
  const [search, setSearch] = useState("");

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  const filteredItems = itemList.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="content-item">
      <header>
        <div className="user">
          <span>Usuário</span>
        </div>
      </header>

      <section className="banner">
        <Tooltip title="Retornar à Página Inicial" arrow>
          <img src={banner} alt="Banner" onClick={() => navigate('/') }/>
        </Tooltip>
      </section>

      <section className="search-bar">
        <Tooltip title="Digite o nome do item para buscar" arrow>
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Buscar pôster..."
            tooltip="Digite o nome do item para buscar"
          />
        </Tooltip>
        
      </section>

      <section className="main-items">
        {!hasItems ? (
          <div className="no-results">
            <WarningAmberIcon fontSize="large" />
            <p>Não há pôsteres disponíveis no momento</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="no-results">
            <WarningAmberIcon fontSize="large" />
            <p>Nenhum item encontrado</p>
          </div>
        ) : (
          <div className="items-grid">
            {filteredItems.map((p, index) => (
              <Item key={index} item={p} />
            ))}
          </div>
        )}
      </section>
      
      <footer></footer>
    </div>
  );
}
