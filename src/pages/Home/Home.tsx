import NavBar from "../../components/NavBar"
import ShoppingCart from "../../components/shoppingCart"
import Search from "../../components/Search"
import { ItemContext } from "../../context/ItemContext"
import { useContext } from "react"

function Home (){
    const context=useContext(ItemContext);
    async function RenderItems() {
        const books=await context.getBook();
    }
    return(
        <>
        <NavBar></NavBar>
        <Search></Search>
        <div className="home">
            <div className="books">
                <button onClick={RenderItems}>Prueba de libros</button>
            </div>
        </div>
        </>
    )
}

export default Home