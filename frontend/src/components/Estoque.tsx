import React from "react";
import { EstoqueContext, Produto } from "../context/EstoqueProvider";

type EstoqueProps = {
  produtos: Produto[];
}

function Estoque() {
  const {produtos} = React.useContext(EstoqueContext);

  return (
    <div className="h-full flex flex-col gap-2 items-start justify-start p-10 gap-5">
      <h1 className="text-3xl font-bold">Produtos em estoque</h1>
      <div className="display_products w-full">
        <ul className="scroll-m-2 w-full">
          {produtos && produtos.map((produto: Produto) => (
            <li
              key={produto.produto}
              className="
                    w-full flex flex-row items-start
                    border-2 border-gray-400 p-2 rounded-lg
                    mt-2 mb-2
                  "
            >
              <p
                className="
                  w-full
                "
              >Produto: {produto.produto}</p>
              <div
                className="
                  w-full 
                  flex flex-col items-start justify-start
                "
              >
                <p>Preço: {produto.preco}</p>
                <p>Quantidade: {produto.quantidade}</p>
                <p>Total: {produto.total}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Estoque;
