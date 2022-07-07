import React, {useState} from 'react';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';

function Form({formTitle, addArticle, magasins}){

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [magasin, setMagasin] = useState([]);



    const handleSubmit = (e) => {
        e.preventDefault();
        if(name !== "" && quantity > 0){
            let article = {}
            article.nom_produit = name;
            article.quantite_produit = quantity;
            article.fk_id_magasin = magasin;
            addArticle(article);
            setName('');
            setQuantity(0);
            // console.log();
        }
    }
    

    return (
        <div>
            <h4>{formTitle}</h4>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <div className="row">
                    <div className="col-sm-2">
                        <input type="number" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} className="form-control"/>
                    </div>
                    <div className="col-sm-3">
                        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control"/>
                    </div>

                    <div className="col-sm-2">
                        <label for="magasin-select">Choisir un magasin:</label><br/>
                        <select className='form-select' name="magasin" id="magasin-select" onChange={(e)=>{setMagasin(e.target.value)}}>
                            <option value="" >--Choississez un magasin--</option>
                            {magasins.map((magasin, index)=>{
                                return <option value={magasin.id_magasin} key={index} >{magasin.nom_magasin}</option>
                            })}
                            
                        </select>
                    </div>
                    
                
                </div>
                <button type="submit" className="btn btn-info text-white mt-2">Ajouter</button>
                
                
            </form>
        </div>
    )


}

export default Form;