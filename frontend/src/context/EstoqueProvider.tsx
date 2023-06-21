import React from 'react'
import { createContext } from "react";

export type Produto = {
    produto: string,
    preco: string,
    quantidade: string,
    total: number,
}

export interface EstoqueContextType {
    produtos: Produto[],
    setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>
}

export const EstoqueContext = createContext<EstoqueContextType>({} as EstoqueContextType);

export default function EstoqueProvider({ children }: React.PropsWithChildren)  {
    const [produtos, setProdutos] = React.useState<Produto[]>([]);

    return (
        <EstoqueContext.Provider value={{produtos , setProdutos}}>
            {children}
        </EstoqueContext.Provider>  
    )
}
