import { useState } from 'react'
import quotes from "./assets/quotes.json";
import './App.css'

const getCita = () => {
  console.log(quotes.quotes.length)
  return quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
};

function App() {
  
const cambiarCita = () => {
  setCita(getCita());
};  
  const [cita, setCita] = useState(getCita());
  console.log(cita);

  return (
    <>
      <div id="quote-box">
        <div>
          <span id="text">{cita.quote}</span>
        </div>
        <div>- <span id="author">{cita.author}</span></div>
        <div>
        <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${cita.quote}`}
            id="tweet-quote"
          >
            Tweet this quote
        </a>
          <button onClick={cambiarCita} id="new-quote">New quote</button>
        </div>
      </div>
    </>
  )
}

export default App
