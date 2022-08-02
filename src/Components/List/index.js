import './Style.css'
import Card from "../Card"
import { useState , useEffect } from "react"

function List({ listTransactions, setListTransactions }) {
    
    const [ listTransationsFiltered, setListTransationsFiltered ] = useState([])
    
    function filterTransactions(type) {
        const filtered = listTransactions.filter((elem) => elem.type === type)
        setListTransationsFiltered(filtered)
    }

    function handleListTransactions(removeItem) {
        const itensFiltrados = listTransactions.filter(elem => elem.description !== removeItem)
        setListTransactions(itensFiltrados)
    }

    useEffect(() => {
        setListTransationsFiltered(listTransactions)
    }, [listTransactions])

    return (
        <section id="secPai">
            <div id="resFin">
                <p>Resumo Financeiro</p>
                <div id="buttonsFilter">
                    <button onClick={() => setListTransationsFiltered(listTransactions)}>Todos</button>

                    <button onClick={() => filterTransactions("Entrada")}>Entradas</button>

                    <button onClick={() => filterTransactions("Despesa")}>Despesas</button>
                </div>
            </div>
            <div className="divOver">
                <div className="list">
                    {listTransactions.length > 0 ? listTransationsFiltered.map((transaction, index) =>
                        <Card removerItem={handleListTransactions} transaction={transaction} key={index} />)
                        :
                        <p id="notItens">Você ainda não possui nenhum lançamento</p>}
                </div>
            </div>

        </section>
    )
}

export default List