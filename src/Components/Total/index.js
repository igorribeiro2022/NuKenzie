import './Style.css';


function Total({ listTransactions }) {
    const totalValue = listTransactions.reduce((acc, atual) => {
        console.log(atual.value)
        return atual.type === "Entrada" ? acc + atual.value : acc - atual.value
    },0)

    return (
        <section id="section-total">
            <div>
                <p id="valorTotal">Valor total:</p>
                <p id="preco">{totalValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
            </div>
            <p>O valor se refere ao saldo</p>
        </section>
    )
}

export default Total