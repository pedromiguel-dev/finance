import React from "react";
import { EstoqueContext, Produto } from "../context/EstoqueProvider";
import Estoque from "./Estoque";

function Home() {
  const {setProdutos} = React.useContext(EstoqueContext);
  const {produtos} = React.useContext(EstoqueContext);

  const [prod, setProd] = React.useState<Produto[]>([]);
  const [produto, setProduto] = React.useState("");
  const [preco, setPreco] = React.useState("");
  const [quantidade, setQuantidade] = React.useState("");
  const [total, setTotal] = React.useState(0);


  const saveProduct = () => {
    setProdutos((prev) => {
        return [{produto, preco, quantidade, total}, ...prev]
    });
  }

  React.useEffect(() => {
    setTotal(Number(preco) * Number(quantidade));
  }, [preco, quantidade, total]);
  return (
    <div className="h-full flex flex-col gap-2 items-start justify-start p-10 gap-5">
        <form
          className="
          w-full
              flex flex-col items-start justify-start
            "
        >
          <h1 className="
            text-3xl font-bold text-xlg

        ">Controle estoque</h1>
          <label htmlFor="produto">Produto</label>
          <input
            className="border-2 border-gray-400 p-2 rounded-lg w-full
                mt-2 mb-2"
            type="text"
            id="produto"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
          />
          <label htmlFor="preco">Preço</label>
          <input
            className="border-2 border-gray-400 p-2 rounded-lg w-full
                mt-2 mb-2"
            type="number"
            id="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
          <label htmlFor="quantidade">Quantidade</label>
          <input
            className="border-2 border-gray-400 p-2 rounded-lg w-full
                mt-2 mb-2"
            type="number"
            id="quantidade"
            value={quantidade}
            onChange={(e) => {
              setQuantidade(e.target.value);
            }}
          />
          <button
            className="
                w-full
                px-4
                bg-blue-400 p-2 rounded-lg
                mt-2 mb-2
                font-bold text-white
                "
            type="button"
            onClick={() => saveProduct()}
          >
            Salvar
          </button>
        </form>
      </div>
  );
}

export default Home;
