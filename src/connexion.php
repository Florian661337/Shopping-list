<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'courses';

try {

    $connexion = new PDO("mysql:host=$servername;dbname=$dbname;port=3306;charset=utf8", $username, $password);    
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $query = "SELECT * FROM produit";

    $req = $connexion->prepare($query);

    $req->execute();
    $res = $req->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($res);
    die;
    
} catch(PDOException $e){

    echo 'Echec de connexion : ' . $e->getMessage(); 

}

