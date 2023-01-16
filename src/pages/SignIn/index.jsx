import { Link } from "react-router-dom";
import './style.css'
export default function SignIn(){
    return(
        <section className="signin">
            <section className="left"></section>
            <section className="right"></section>
            <form className="form-signin">
                <div className="titulo">
                    <Link><h2 style={{borderBottom:'2px solid #FFE26C'}}>Login</h2></Link>
                    <Link><h2>Cadastro</h2></Link>
                </div>
                <div className="profile-signin"></div>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="*****" />
                <div className="security-signin"></div>
                <input type="submit" value='ENTRAR'/>
            </form>
        </section>
        )
}