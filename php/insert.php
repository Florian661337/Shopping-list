<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

require 'connexion.php';


if(isset($_POST['insert_produit'])){

    $query = "INSERT INTO `produit`(`nom_produit`, `quantite_produit`, `fk_id_magasin`) VALUES (:nom_produit, :quantite_produit, :fk_id_magasin)";
    $requete = $connexion->prepare($query);
    $requete->bindValue(':nom_produit', $_POST['nom_produit']);
    $requete->bindValue(':quantite_produit', $_POST['quantite_produit']);
    $requete->bindValue(':fk_id_magasin', $_POST['fk_id_magasin']);
    $result = $requete->execute();


    $id_produit = $connexion->lastInsertId();

    $query = "SELECT * 
    FROM produit as p 
    LEFT JOIN magasin as m
    ON m.id_magasin = p.fk_id_magasin
    WHERE id_produit = :id_produit";
    $requete = $connexion->prepare($query);
    $requete->bindValue(':id_produit', $id_produit);
    $result = $requete->execute();

    $produit = $requete->fetch(PDO::FETCH_ASSOC);


    if($result){
        echo json_encode([
            'error' => false,
            'message' => 'Produit ajouté avec succès',
            'produit' => $produit
        ]);
    }else{
        echo json_encode([
            'error' => true,
            'message' => 'Echec de l\'ajout du produit'
        ]);
    }

}