<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

require 'connexion.php';

$query = "SELECT * 
FROM produit as p 
LEFT JOIN magasin as m
ON m.id_magasin = p.fk_id_magasin";

$requete = $connexion->prepare($query);
$requete->execute();
$courses = $requete->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($courses);
die;
