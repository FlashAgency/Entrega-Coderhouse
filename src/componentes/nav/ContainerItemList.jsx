import { Link } from 'react-router-dom';
import '../nav/NavbarStyle.css';

const ListProducts = ({ handleFilterClick }) => {
    return (
        <div className='productlist__div'>
            <Link to="/" className="btn__link">
                <button onClick={() => handleFilterClick('Todos')} className='btn__list'>
                    Inicio
                </button>
            </Link>
            <Link to="/category/Playstation5" className="btn__link">
                <button onClick={() => handleFilterClick("Playstation5")} className='btn__list'>
                    Nosotros
                </button>
            </Link>

           
        </div>
    );
}

export default ListProducts;