import React, { useState, useEffect, useRef } from 'react';
import App from './../App';
   

 function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
        if(input !=='' && inputValue >=1){
          e.preventDefault();
         
          let oReq = new XMLHttpRequest();
          oReq.open("POST", "http://localhost/Shopping-list/src/add.php");
          oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          oReq.responseType= "text";
          oReq.send(`nom_produit=${input}&quantite_produit=${inputValue}}`);

        props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input,
          quantity: inputValue
        });
        setInput('');
        setInputValue('');
      }else{
        alert('Veuillez rentrez un produit avec une quantité supérieur a zero')
      }
    }


    const handleEdit = e => {
      if(input !=='' && inputValue >=1){
        e.preventDefault();
        let id = '';
        let oReq = new XMLHttpRequest();
        oReq.open("POST", "http://localhost/Shopping-list/src/edit.php");
        oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        oReq.responseType= "text";
        oReq.send(`nom_produit=${input}&quantite_produit=${inputValue}}&id=${id}`);
        props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input,
          quantity: inputValue
        });
        setInput('');
        setInputValue('');
      }else{
        alert('Veuillez rentrez un produit avec une quantité supérieur a zero')
      }

    }

  const [inputValue, setInputValue] = useState('');


  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
        <input type="number" className="todo-input-quantity" min="1" max="10" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleEdit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
        {/* quantité */}
        <input type="number" className="todo-input-quantity" min="1" max="10" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        {/* Ajouter */}
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
