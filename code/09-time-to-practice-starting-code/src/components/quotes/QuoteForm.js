import { Fragment, useRef,useState } from 'react';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import { Prompt } from 'react-router-dom';

const QuoteForm = (props) => {
  const [isLeaving, setIsLeaving] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    setIsLeaving(false);

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }
  function formFocusHandler() {
    setIsLeaving(true);
  }
  function isLeavingHandler() {
    setIsLeaving(false);
  }
  return (
    <Fragment>
    <Prompt when={isLeaving} message={(location)=> "Are you sure you want to leave ? all your entered data will be lost."} />
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler} onFocus={formFocusHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn' onClick={isLeavingHandler}>Add Quote</button>
        </div>
      </form>
      </Card>
      </Fragment>
  );
};

export default QuoteForm;
