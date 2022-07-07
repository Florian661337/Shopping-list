import React, {useState, useEffect} from 'react';
import Form from './component/Form';
import ItemList from './component/ItemList';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import './App.css';


function App(){

  const [articles, setArticles] = useState([])
  const [magasins, setMagasins] = useState([])

  useEffect(()=>{

    axios({
      method: 'post',
      url: 'http://localhost/list-shopping/php/load.php',
      data: {}
    })
    .then((response)=>{
      console.log(response);
      const courses = response.data;
      setArticles(courses);
    })
    .catch((error)=>{
      console.log(error);
    });

    axios({
      method: 'post',
      url: 'http://localhost/list-shopping/php/get-store.php',
      data: {}
    })
    .then((response)=>{
      console.log(response);
      const magasins = response.data;
      setMagasins(magasins);
    })
    .catch((error)=>{
      console.log(error);
    });

  }, [])

  const addArticle = (article) => {

    let formData = new FormData();
    formData.append('nom_produit', article.nom_produit)
    formData.append('quantite_produit', article.quantite_produit)
    formData.append('fk_id_magasin', article.fk_id_magasin)
    formData.append('insert_produit', 1)

    axios({
      method: 'POST',
      url: 'http://localhost/list-shopping/php/insert.php',
      responseType: 'json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    })
    .then((response)=>{
      console.log(response);
     console.log(response.data.message);
      if(response.data.error === false){

        const newArticles = [...articles, response.data.produit]
        setArticles(newArticles);

      }
    })
    .catch((error)=>{
      console.log(error);
    });
  


  }

  const setMagasin = (newMagasin, id_magasin)=>{
    let formData = new FormData();
    formData.append('id_magasin', id_magasin)
    formData.append('nom_magasin', newMagasin)

    axios({
      method: 'GET',
      url: 'http://localhost/list-shopping/php/get-store.php',
      responseType: 'json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {}
    })
    .then((response)=>{
      console.log(response);
      setMagasin(response.data);
     
    })
    .catch((error)=>{
      console.log(error);
    });
  }



  const editMagasin = (id_magasin, id_article)=>{
    console.log(id_magasin);
    console.log(id_article);
    let formData = new FormData();
    formData.append('id_magasin', id_magasin)
    formData.append('id_article', id_article)
    axios({
        method: 'POST',
        url: 'http://localhost/list-shopping/php/edit.php',
        responseType: 'json',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
        
      })
      .then((response)=>{
        console.log(response);
        if(response.data.error === false){
          console.log("test");
          let newArticles = [];
          articles.map((article)=>{
            let newArticle = article;
            if(article.id_produit === id_article){
          console.log(newArticle);

              newArticle.fk_id_magasin = id_magasin;
              newArticle.nom_magasin = response.data.nom_magasin;
          console.log(newArticle);

            }
            newArticles.push(newArticle);
          })
          setArticles(newArticles);
        }
       
      })
      .catch((error)=>{
        console.log(error);
      });
}
  


  const setQuantity = (newQuantity, id_produit) => {

    /////////////////////


    let formData = new FormData();
    formData.append('id_produit', id_produit)
    formData.append('quantite_produit', newQuantity)

    axios({
      method: 'POST',
      url: 'http://localhost/list-shopping/php/edit.php',
      responseType: 'json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    })
    .then((response)=>{
      console.log(response);
     console.log(response.data.message);
      if(response.data.error === false){

        let newArticles = articles.map((article) => {
      
          if(article.id_produit === id_produit){
            article.quantite_produit = newQuantity;
          }
          return article;
        })
        
        setArticles(newArticles);

      }
    })
    .catch((error)=>{
      console.log(error);
    });

  }

  const setName = (newName, id_produit) => {

    let formData = new FormData();
    formData.append('id_produit', id_produit)
    formData.append('nom_produit', newName)

    axios({
      method: 'POST',
      url: 'http://localhost/list-shopping/php/edit.php',
      responseType: 'json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    })
    .then((response)=>{
      console.log(response);
     console.log(response.data.message);
      if(response.data.error === false){

        let newArticles = articles.map((article) => {
          
          if(article.id_produit === id_produit){
            article.nom_produit = newName;
          }
          return article;
        })
        
        setArticles(newArticles);
      }
    })
    .catch((error)=>{
      console.log(error);
    });



  }

  const deleteArticle = (id_produit) => {

    let formData = new FormData();
    formData.append('id_produit', id_produit)
    formData.append('delete_product', 1)

    axios({
      method: 'POST',
      url: 'http://localhost/list-shopping/php/delete.php',
      responseType: 'json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    })
    .then((response)=>{
      console.log(response);
     console.log(response.data.message);
      if(response.data.error === false){

        let newArticles = [];
        articles.map((article) => {
    
          if(article.id_produit !== id_produit){
            newArticles.push(article);
          }
    
        })
    
        setArticles(newArticles);
      }
    })
    .catch((error)=>{
      console.log(error);
    });


  }

return (
  <div className="container">
    <h3 className='pt-3'>Liste de courses</h3>
    <Form formTitle="Ajouter un article" addArticle={addArticle} magasins={magasins}/>
    <ItemList articles={articles} setQuantity={setQuantity} setName={setName} deleteArticle={deleteArticle} magasins={magasins} editMagasin={editMagasin}/>
  </div>
)

}

export default App;
