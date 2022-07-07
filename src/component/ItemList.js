import React from 'react';
import Article from './Article';

function ItemList({articles, setQuantity, setName, deleteArticle, magasins, editMagasin}){

    return (
        <div className='div-article'>
            <p className='p-article'>Liste des articles</p>
            {
                articles.map((article, index) => {
                    return <Article key={index} article={article} setQuantity={setQuantity} setName={setName} deleteArticle={deleteArticle} magasins={magasins} editMagasin={editMagasin}/>
                })
            }
        </div>
    )


}

export default ItemList;