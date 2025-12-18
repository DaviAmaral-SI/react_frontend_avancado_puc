import { useEffect, useState } from "react";
import banner from "../assets/banner.png";
import items from '../items.json'
import Item from "../components/Item";

import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useNavigate } from 'react-router-dom'


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
        <img src={banner} alt="Banner" onClick={() => navigate('/') }/>
      </section>

      <section className="search-bar">
        <input
          type="text"
          placeholder="Buscar pôster..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      <section className="main-items">
        {!hasItems ? (
          <div className="no-results">
            <WarningAmberIcon fontSize="large" />
            <p>Não há pôsteres disponíveis no momento</p>
          </div>
        ) : filteredItems.length > 0 ? (
          filteredItems.map((p, index) => (
            <Item key={index} item={p} />
          ))
        ) : (
          <div className="no-results">
            <WarningAmberIcon fontSize="large" />
            <p>Nenhum item encontrado</p>
          </div>
        )}
      </section>
      
      <footer></footer>
    </div>
  );
}
