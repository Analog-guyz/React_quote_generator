import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios'
function App() {
  const [ quote, setQuote ] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  async function fetchRandomQuote() {
    try {
      setErrorMessage("");
      const quoteObject = await axios.get("https://api.quotable.io/random");
      setQuote(quoteObject.data);
      console.log(quoteObject)
    } catch (error) {
      setErrorMessage(error.message);
      console.log(errorMessage)

    }}
    useEffect(() => {
      fetchRandomQuote();
    }, []);
  
  return (
    <div className="app-wrapper">
      <div className="box-wrapper">
        <div className="title-wrapper"><h1>Quote generator</h1></div>
        <div className="quote-wrapper"><h3>"{quote.content}"</h3></div>
        <div className="author-wrapper"><h4>-{quote.author}</h4></div>
        <div className="button-wrapper">
          <button className="button" onClick={fetchRandomQuote}>New quote</button>
        </div>
        <div className="footer">Made by Analog_guy</div>
      </div>
      
    </div>
    
  );
}

export default App;
