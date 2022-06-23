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
    
    if (isset($_POST['nom_produit']) && isset($_POST['id'])) {
    echo $_POST['nom_produit'].','.$_POST['id'].','.$_POST['quantite_produit'];
    $query = "UPDATE `produit` SET nom_produit = :nom_produit,
    quantite_produit = :quantite_produit WHERE id_produit = :id";
    $req = $connexion->prepare($query);

    $req->bindValue('nom_produit', htmlEntities($_POST['nom_produit']), PDO::PARAM_STR);
    $req->bindValue('quantite_produit', htmlEntities($_POST['quantite_produit']), PDO::PARAM_INT);
    $req->bindValue('id', htmlEntities($_POST['id']), PDO::PARAM_INT);
    $req->execute();
    die;

}

    
} catch(PDOException $e){

    echo 'Echec de connexion : ' . $e->getMessage(); 

}
