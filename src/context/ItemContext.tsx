import { createContext, useEffect, useState } from "react";
import { supabase } from "../utils/Supabase";

interface ItemsContextProps {
    getBook: () => Promise<any[]>,
}
export const ItemContext = createContext ({} as ItemsContextProps);
export const ItemProvider = ({ children }: any) => {
    const getBook= async () =>{
try {
            const { data, error } = await supabase
                .from("libros")
                .select("*");

            if (!error) {
                console.log(data)
                return data;
            }
        } catch (error) {
            console.log(error)
        }
        return []
    }
    return <ItemContext.Provider value={
        {
            getBook,
        }
    }>
        {children}
    </ItemContext.Provider>
}