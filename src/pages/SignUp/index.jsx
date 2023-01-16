import { Link } from "react-router-dom";
import './style.css'
export default function SignUp(){
    return(
         <section className="signup">
            <section className="left"></section>
            <section className="right"></section>
            <form className="form-signup">
                <div className="titulo">
                    <Link><h2>Login</h2></Link>
                    <Link><h2 style={{borderBottom:'2px solid #C1272D'}}>Cadastro</h2></Link>
                </div>
                <div className="profile-signup"></div>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="*****" />
                <div className="security-signup"></div>
                <input type="submit" value='ENTRAR'/>
            </form>
        </section>
    )
}