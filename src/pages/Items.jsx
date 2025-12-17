import { useEffect, useState } from "react";
import banner from "../assets/banner.png";
import items from '../items.json'
import Item from "../components/Item";

export default function Items() {
  const [itemList, setItemList] = useState(items.items);
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    <div className="content-item">
      <header>
        <div className="user">
          <span>Usuário</span>
        </div>
      </header>

      <section className="banner">
        <img src={banner} alt="Banner" />
      </section>

      <section className="main-items">
        {itemList.map((p, index) => (
          <Item key={index} item={p} />
        ))}
      </section>
      <footer></footer>
    </div>
  );
}
