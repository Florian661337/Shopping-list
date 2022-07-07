import React, {useState} from 'react';
import axios from 'axios';


export default function Article({article, setQuantity, setName, deleteArticle, editMagasin, magasins}){

    const [editMode, setEditMode] = useState(false);

    
    
    let content = <div style={{display: "flex", alignItems: "baseline"}}>
                        
                        <p className="ms-5">{article.nom_produit} - {article.quantite_produit} | {article.nom_magasin}</p>
                  </div>

            if(editMode){
                content = <div style={{display: "flex", alignItems: "baseline"}}>
                            <input type="number"   className="ms-2 form-control" onChange={(e)=>{setQuantity(e.target.value, article.id_produit)}} value={article.quantite_produit} />

                            <input type="text" className="form-control" onChange={(e)=>{setName(e.target.value, article.id_produit)}} value={article.nom_produit} />

                            <select className="form-select" onChange={(e)=>{editMagasin(e.target.value, article.id_produit)}}>
                              <option value={0}>
                                --Choississez votre magasin--
                              </option>
                                {magasins.map((magasin, index)=>{
                                  if(magasin.id_magasin==article.fk_id_magasin){
                                    return <option value={magasin.id_magasin} key={index} selected  >{magasin.nom_magasin}</option>
                                  }else{
                                    return <option value={magasin.id_magasin} key={index} >{magasin.nom_magasin}</option>
                                  }                           
                                })}
                            </select>
                       
                          </div>
            }

    return (
        <div style={{display: "flex", alignItems: "baseline"}}>
            <button className="btn btn-danger btn-sm me-1" onClick={()=>{deleteArticle(article.id_produit)}}>Supprimer</button>
            <button className="btn btn-warning btn-sm" onClick={()=>{setEditMode(!editMode)}}>Modifier</button>
            {content}
        </div>
    )

}