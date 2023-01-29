import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote"
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

export default function QuoteDetails() {
  const params = useParams();
  const quote = DummyQuote.find(quote => quote.id === params.quoteId);
  if (!quote)
    {return(<h1 className="centerd">No Quotes found.</h1>)}
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
          <Route path="/quotes/:quoteId/comments">
              <Comments />
          </Route>
    </Fragment>
  );
}
