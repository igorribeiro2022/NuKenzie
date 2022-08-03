import './App.css';
import { useState } from 'react'
import Form from './Components/Form';
import List from './Components/List';
import Total from './Components/Total';
import LandingPage from './Components/LandingPage';
import { motion } from "framer-motion";

function App() {
  const [listTransactions, setListTransactions] = useState([])
  const [ isLogged, setIsLogged ] = useState(false)

  return (
    

      isLogged ? 
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="App">
        <header className="App-header">
          <h1>Nu <span>Kenzie</span></h1>
          <button onClick={() => setIsLogged(false)}>Início</button>
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
      </motion.div>
      :
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LandingPage setIsLogged={setIsLogged}/>
      </motion.div>
      
      
  );
}

export default App;
