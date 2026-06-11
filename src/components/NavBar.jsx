import { useNavigate } from "react-router-dom";

function NavBar (){
    const navigate = useNavigate();
    function goToLogin() {
        navigate("/login");
        console.log("Entró")
    }
    return(
        <nav>
            <b>Bhook    </b>
            <button>Menu</button>
            <button onClick={goToLogin}>Login</button>
            <button>Recomendaciones</button>
        </nav>
    )
}
export default NavBar