import NavBar from "../../components/NavBar"
import Search from "../../components/Search"
import { ItemContext } from "../../context/ItemContext"
import { useContext, useEffect, useState } from "react"
import ListItems, { Book } from "../../components/listItems"

function Home (){
    const context=useContext(ItemContext);
    const [books,setBooks]= useState <Book[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    async function loadBooks() {
        const data = await context.getBook();

        if (data) {
            setBooks(data);
            setLoading(false);
        }
    }

    loadBooks();
}, []);
    
    return(
        <>
        <NavBar></NavBar>
        <Search></Search>
        <div className="home">
            <div id="books">
                {loading ?
                    (<>Cargando</>)
                    :(
                    <ListItems data={books}></ListItems>
                    )}

            </div>
        </div>
        </>
    )
}

export default Home