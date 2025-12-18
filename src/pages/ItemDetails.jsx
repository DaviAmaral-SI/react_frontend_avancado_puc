import { useLocation, useNavigate, useParams } from "react-router-dom";
import SimpleBottomNavigation from '../components/Navigation';
import { Grid } from "@mui/material";

export default function ItemDetails() {
  let { state } = useLocation();
  let { description } = useParams();
  let navigate = useNavigate();

  return (
    <div className="detailed-content">
        <div>
            <button className='back' onClick={() => navigate('/items')}> Voltar</button>

            <div>
                <img className="detailed-image" src={state.p.image} alt='Não foi possível carregar a imagem'></img>
            </div>
            
            <div> 
                <h2>{state.p.title} - {state.p.manufacturer}</h2>
                <h3>Preço: {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                    }).format(state.p.price)}</h3>
                <p>{state.p.description}</p>
                <p>Tamanho: {state.p.size}</p>
            </div>
            
            <Grid
              container
              direction="row"
              spacing={1}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SimpleBottomNavigation/>
            </Grid>
        </div>
    </div>
  )
}
