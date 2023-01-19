import './header.css'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header>
            <Link className='logo' to="/" >Nerd Flix </Link>
            <Link className='favoritos' to="/favoritos" >&#128150;</Link>
        </header>
    )
}
export default Header;