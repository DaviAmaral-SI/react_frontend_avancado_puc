import { useLocation, useNavigate, useParams } from "react-router-dom";
import SimpleBottomNavigation from '../components/Navigation';
import { Grid } from "@mui/material";

export default function ItemDetails() {
  let { state } = useLocation();
  let { id } = useParams();
  let navigate = useNavigate();

  return (
    <div className="detailed-content">
        <div>
            <button className='back' onClick={() => navigate('/items')}> Voltar</button>
            <div>
                <img className="detailed-image" src={state.p.image} alt='Não foi possível carregar a imagem'></img>
            </div>
            <div> 
                <h2>{state.p.title} - {id} </h2>
                <p> {state.p.description} </p>
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
