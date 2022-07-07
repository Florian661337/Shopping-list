<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

require 'connexion.php';

if(isset($_POST['delete_product'])){

    $query = "DELETE FROM produit WHERE id_produit = :id_produit";
    $requete = $connexion->prepare($query);
    $requete->bindValue(':id_produit', $_POST['id_produit']);
    $result = $requete->execute();

    if($result){
        echo json_encode([
            'error' => false,
            'message' => 'Produit supprimé avec succès'
        ]);
    }else{
        echo json_encode([
            'error' => true,
            'message' => 'Echec de la suppression du produit'
        ]);
    }

}