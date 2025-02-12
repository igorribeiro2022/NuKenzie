import './StyleCard.css';

function Card({ removerItem, transaction }) {


    return (
        <div id={transaction.type === "Entrada" ? "card" : "card2"}>
            <div id="divDesc" >
                <p>{transaction.description}</p>
                <div>
                    <p className="typeTransaction">{transaction.value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                    <svg onClick={() => removerItem(transaction.description)} id="butTrashCard" width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.36108 0.722195H6.06942L5.87845 0.378445C5.80206 0.225667 5.64928 0.111084 5.4774 0.111084H3.28122C3.10935 0.111084 2.95657 0.225667 2.88018 0.378445L2.70831 0.722195H0.41664C0.244765 0.722195 0.111084 0.874973 0.111084 1.02775V1.63886C0.111084 1.81074 0.244765 1.94442 0.41664 1.94442H8.36108C8.51386 1.94442 8.66664 1.81074 8.66664 1.63886V1.02775C8.66664 0.874973 8.51386 0.722195 8.36108 0.722195ZM1.12324 9.02949C1.14233 9.52602 1.54338 9.88886 2.0399 9.88886H6.71872C7.21525 9.88886 7.61629 9.52602 7.63539 9.02949L8.05553 2.55553H0.722195L1.12324 9.02949Z" fill="#5B6166" />
                    </svg>
                </div>
            </div>
            <p className="typeTransaction">{transaction.type}</p>
        </div>
    )
}

export default Card