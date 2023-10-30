import { Link } from "react-router-dom";
import './NavbarStyle.css';




const Brand = () => {
  return (
    <div className='productlist__div'>
    <Link to={'/'} className="logo" >
      GUAYABA GAMER
    </Link>
    </div>
  )
}



export default Brand;