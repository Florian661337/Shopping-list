<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

require 'connexion.php';


if(isset($_POST['nom_produit'])){

    $query = "UPDATE produit SET nom_produit = :nom_produit WHERE id_produit = :id_produit";
    $requete = $connexion->prepare($query);
    $requete->bindValue(':nom_produit', $_POST['nom_produit']);
    $requete->bindValue(':id_produit', $_POST['id_produit']);
    $result = $requete->execute();

    if($result){
        echo json_encode([
            'error' => false,
            'message' => 'Nom modifié avec succès'
        ]);
    }else{
        echo json_encode([
            'error' => true,
            'message' => 'Echec de la modification du nom'
        ]);
    }

}

if(isset($_POST['quantite_produit'])){

    $query = "UPDATE produit SET quantite_produit = :quantite_produit WHERE id_produit = :id_produit";
    $requete = $connexion->prepare($query);
    $requete->bindValue(':quantite_produit', $_POST['quantite_produit']);
    $requete->bindValue(':id_produit', $_POST['id_produit']);
    $result = $requete->execute();

    if($result){
        echo json_encode([
            'error' => false,
            'message' => 'Quantité modifié avec succès'
        ]);
    }else{
        echo json_encode([
            'error' => true,
            'message' => 'Echec de la modification de la quantité'
        ]);
    }

}

if(isset($_POST['id_magasin'])){

    $query = "UPDATE produit SET fk_id_magasin = :fk_id_magasin WHERE id_produit = :id_produit";
    $requete = $connexion->prepare($query);
    $requete->bindValue(':fk_id_magasin', $_POST['id_magasin']);
    $requete->bindValue(':id_produit', $_POST['id_article']);
    $result = $requete->execute();
    
    $query = "SELECT * FROM magasin WHERE id_magasin = :id_magasin";
    $requete = $connexion->prepare($query);
    $requete->bindValue(':id_magasin', $_POST['id_magasin']);
    $result = $requete->execute();
    $magasin = $requete->fetch(PDO::FETCH_ASSOC);

    if($result){
        echo json_encode([
            'error' => false,
            'message' => 'Magasin modifié avec succès',
            'nom_magasin'=>$magasin['nom_magasin']
        ]);
    }else{
        echo json_encode([
            'error' => true,
            'message' => 'Echec de la modification du Magasin'
        ]);
    }

}