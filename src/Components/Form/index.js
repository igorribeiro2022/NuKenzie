import { useState } from "react"
import './Style.css';


function Form({ listTransactions, setListTransactions }) {
    const [inputValue, setInputValue] = useState('')
    const [inputDescription, setInputDescription] = useState('')
    const [selectType, setSelectType] = useState("Selecione")


    return (
        <>
            <form id="formCadastro">
                <div id="formDiv1">
                    <label>Descrição</label>
                    <input className="inputsForm" placeholder="Digite aqui sua descrição" type='text' value={inputDescription} onChange={(event) => setInputDescription(event.target.value)} />
                    <p>Ex: Compra de Livros</p>
                </div>
                <div id="formDiv2">
                    <div>
                        <label>Valor</label>
                        <input className="inputsForm" placeholder="Digite o valor" type='text' value={inputValue} onChange={(event) => setInputValue(Number(event.target.value))} />
                    </div>
                    <div>
                        <label>Tipo de Valor</label>
                        <select value={selectType} onChange={(event) => setSelectType(event.target.value)}>
                            <option>Selecione</option>
                            <option>Entrada</option>
                            <option>Despesa</option>
                        </select>
                    </div>
                </div>
                <button onClick={(event) => {
                    event.preventDefault()

                    if (inputValue !== '' && inputDescription !== '' && selectType !== "Selecione") {
                        setListTransactions(
                            [...listTransactions, { description: inputDescription, type: selectType, value: inputValue }]
                        )
                        console.log(inputValue)

                        setInputValue('')
                        setInputDescription('')
                        setSelectType('Selecione')

                    } else {
                        alert("Preencha todos os campos!")
                    }
                }}>Inserir Valor</button>
            </form>
        </>
    )
}

export default Form