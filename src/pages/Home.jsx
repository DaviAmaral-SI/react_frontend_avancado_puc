import banner from '../assets/banner.png'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="content-item">
      <header></header>

        <section className="abstract-banner">
          <div className="banner-content">
            <h1>Pôsteres criativos para todos os estilos</h1>
            <button className="more-info" onClick={() => navigate('/items') }> Veja todos os itens </button>
          </div>
        </section>


      <section className="banner-home">
        <img src={banner} alt="Banner"/>
        <div className="text-intro">
            <p>Home</p>
        </div>
      </section> 
      <footer></footer>
    </div>
  )
}