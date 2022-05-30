import { useState } from "react"
import './Style.css'
import Card from "../Card"

function List({ listTransactions, setListTransactions }) {


    function handleListTransactions(removeItem) {
        const itensFiltrados = listTransactions.filter(elem => elem.description !== removeItem)
        setListTransactions(itensFiltrados)
    }



    return (
        <section id="secPai">
            <div id="resFin">
                <p>Resumo Financeiro</p>
                <div id="buttonsFilter">
                    <button>Todos</button>

                    <button>Entradas</button>

                    <button>Despesas</button>
                </div>
            </div>
            <div className="divOver">
                <div className="list">
                    {listTransactions.length > 0 ? listTransactions.map((transaction, index) =>
                        <Card removerItem={handleListTransactions} transaction={transaction} key={index} />)
                        :
                        <p id="notItens">Você ainda não possui nenhum lançamento</p>}
                </div>
            </div>

        </section>
    )
}

export default List