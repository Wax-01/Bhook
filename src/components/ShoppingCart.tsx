import { useState } from "react"

function ShoppingCart(){
    const [items,setItems]= useState();
    function Buy(Items:any) {
        
    }
    return(
        <div className="car">
            <h2>Carrito de compras</h2>
            <ul>

            </ul>
            <button onClick={Buy}>
                Comprar
            </button>
        </div>
    )
}

export default ShoppingCart