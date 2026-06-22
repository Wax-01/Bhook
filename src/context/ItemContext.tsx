import { createContext, useEffect, useState } from "react";
import { supabase } from "../utils/Supabase";

interface ItemsContextProps {
    getBook: () => Promise<any[]>,
    getSpecificbook: (word:String) => Promise<any[]>
}
export const ItemContext = createContext ({} as ItemsContextProps);
export const ItemProvider = ({ children }: any) => {
    const getBook= async () =>{
try {
            const { data, error } = await supabase
                .from("libros")
                .select("*");

            if (!error) {
                return data;
            }
        } catch (error) {
            console.log(error)
        }
        return [];
    }
    const getSpecificbook = async (word: String)  =>{
try {
            const { data, error } = await supabase
                .from("libros")
                .select("*")
                .ilike("nombre", `%${word}%`);

            if (!error) {
                return data;
            }
        } catch (error) {
            console.log(error)
        }
        return [];
    }
    return <ItemContext.Provider value={
        {
            getBook,
            getSpecificbook,
        }
    }>
        {children}
    </ItemContext.Provider>
}