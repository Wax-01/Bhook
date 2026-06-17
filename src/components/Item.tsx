function Item(nombre: string, descripcion:string,precio:Int16Array,imagenUrl:string) {
    return(
        <div className="item">
            <img src={imagenUrl}/>
            <b>{nombre}</b>
            <p>{precio}</p>
            <p>{descripcion}</p>
        </div>
    )
}

export default Item