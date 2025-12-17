import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Item(props) {
    const [quantity, setQuantity] = useState(1)
    const [valueButton, setValueButton] = useState(true)
    const item = props.item

    // Função para diminuir a quantidade
    const minus = () => {
        (quantity - 1) === 1 ? setValueButton(true) : setValueButton(false)
        if (quantity !== 1) {
            setQuantity(quantity - 1)
        }
    }

    // Função para aumentar a quantidade
    const plus = () => {
        setValueButton(false)
        setQuantity(quantity + 1)
    }

    const buyItem = () =>{
        if (window.confirm(`Preço final: ${new Intl.NumberFormat("pt-BR", {
                                            style: "currency",
                                            currency: "BRL"
                                            }).format(Math.round((item.price * quantity) * 100) / 100)}`)) {
            alert('Compra finalizada!')
            setQuantity(1)
        }
    }

    return (
        <article className="item">
            <img src={item.image} alt="item"/>
            
            <h3 className="price-item">
                {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                    }).format(item.price)}

            </h3>
            
            <Link to={`/items/${item.id}`} state={{ p: item}}>
                <p className="name-item">{item.title}</p>
            </Link>

            <div className="quantity">
                <span >Quantidade:</span>
                <button disabled={valueButton} className="minus" onClick={minus}>-</button>
                <span>{quantity}</span>
                <button className="plus" onClick={plus}>+</button>
            </div>
            <button className="buy" onClick={buyItem}>Comprar</button>
        </article>

    )
}