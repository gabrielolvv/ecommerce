import { Link } from "react-router-dom"
import './style.css'
export default function Header(){

    return(
        <header className="header">
            <div className="container">
                <div className="logo"></div>
                <nav>
                    <ul>
                        <Link><li>Feminino</li></Link>
                        <Link><li>Masculino</li></Link>
                        <Link><li>Promoções</li></Link>
                        <Link><li>Categorias</li></Link>
                        <Link><li className="favoritos"></li></Link>
                        <Link><li className="carrinho"></li></Link>
                        <Link><li className="login"></li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}