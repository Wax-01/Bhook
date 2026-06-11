import NavBar from "../../components/NavBar"
import ShoppingCart from "../../components/shoppingCart"

import Search from "../../components/Search"

function Home (){
    return(
        <>
        <NavBar></NavBar>
        <Search></Search>
        <div className="home">
            <div className="books">
            </div>
        </div>
        </>
    )
}

export default Home