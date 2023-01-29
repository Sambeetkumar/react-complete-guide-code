import React from "react";
import QuoteList from "../components/quotes/QuoteList";
const DummyQuote = [
  {
    id: "q1",
    author: "sam",
    text: "Learning react is fun",
  },
  {
    id: "q2",
    author: "sambeet",
    text: "Learning react is great",
  },
];

export default function AllQuotes() {
  return <QuoteList quotes={DummyQuote} />;
}
