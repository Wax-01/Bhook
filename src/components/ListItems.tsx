import Item from "./Item"
export interface Book {
    id: number;
    nombre: string;
    descripcion: string;
    fecha_publicacion: string;
    stock: number;
    precio: number;
    nota_promedio: number;
    imagen_url: string;
    autor_id: number;
}
interface ListItemsProps {
    data: Book[];
}
function ListItems({ data }: ListItemsProps){
    return data.map((book:Book)=>
        <>
            <Item data={book}></Item>
        </>
    )
}

export default ListItems