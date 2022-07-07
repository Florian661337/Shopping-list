<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

require 'connexion.php';

$query = "SELECT * FROM magasin";
$requete = $connexion->prepare($query);
$requete->execute();
$magasins = $requete->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($magasins);
die;