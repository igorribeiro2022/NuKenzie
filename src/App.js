import './App.css';
import { useState } from 'react'
import Form from './Components/Form';
import List from './Components/List';
import Total from './Components/Total';

function App() {
  const [listTransactions, setListTransactions] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nu <span>Kenzie</span></h1>
        <button>Início</button>
      </header>

      <main className="App-main">

        <section className='sections-main' id='section-cadastro'>
          <Form listTransactions={listTransactions} setListTransactions={setListTransactions} />
          <Total listTransactions={listTransactions} />
        </section>

        <section className='sections-main' id='section-cadastrados'>
          <List listTransactions={listTransactions} setListTransactions={setListTransactions} />
        </section>

      </main>
    </div>
  );
}

export default App;
