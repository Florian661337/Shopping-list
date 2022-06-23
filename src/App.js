import React, {useState, useEffect} from 'react';
import './App.css';
import TodoList from './components/TodoList';


function App() {

    const [products, setProducts] = useState([])

    useEffect(()=>{
      let oReq = new XMLHttpRequest();
      oReq.open("POST", "http://localhost/Shopping-list/src/connexion.php");
      oReq.setRequestHeader("Accept", "application/json");
      oReq.setRequestHeader("Content-Type", "application/json");
      oReq.responseType= "json";
      oReq.send();
      oReq.onload = function (e) {

        setProducts(e.target.response);

      }
  }, [])

  let productsHtml = products.map( (product, index) => {
    return  <div id={product.id_produit} key={index} className="todo-row">
                {/* {console.log(product.id_produit)} */}
                  <div>{product.nom_produit} - {product.quantite_produit}</div>
                  <div className="icons"></div>
            </div>

  } )
  return (
    <div className='todo-app'>
      <TodoList />
      <div className='todo-bdd'>{productsHtml}</div>
    </div>
  );
}


export default App;
