import React from 'react';
import QuoteForm from "../components/quotes/QuoteForm.js"
import { useHistory } from 'react-router-dom';

export default function NewQuote() {
  const history = useHistory();
  const addQuoteHandler=() => {
  history.push("/quotes")
  }
  return (
      <div>
      <QuoteForm onAddQuote={ addQuoteHandler} />
    </div>
  )
}
