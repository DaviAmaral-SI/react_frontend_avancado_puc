import { useState } from "react";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Tooltip from "@mui/material/Tooltip";


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
        Swal.fire({
            title: "Deseja finalizar a compra?",
            text: `Preço final: ${new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(Math.round((item.price * quantity) * 100) / 100)}`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim",
            cancelButtonText: "Não"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title: "Compra finalizada!",
                icon: "success"
                });
                setQuantity(1)
            }
        });
    }

    return (
            <Tooltip title="Clique no nome do item para ler sua descrição" arrow>
                <article className="item">
                    <img src={item.image} alt="Imagem do item"/>
                    
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
            </Tooltip>
    )
}