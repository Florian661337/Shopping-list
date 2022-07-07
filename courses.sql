-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mer. 06 juil. 2022 à 14:22
-- Version du serveur : 5.7.33
-- Version de PHP : 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `courses`
--

-- --------------------------------------------------------

--
-- Structure de la table `magasin`
--

CREATE TABLE `magasin` (
  `id_magasin` int(11) UNSIGNED NOT NULL,
  `nom_magasin` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `magasin`
--

INSERT INTO `magasin` (`id_magasin`, `nom_magasin`) VALUES
(1, 'Leclerc'),
(2, 'Carrefour'),
(3, 'Auchan'),
(4, 'Lidl'),
(5, 'Intermarché'),
(6, 'Super U');

-- --------------------------------------------------------

--
-- Structure de la table `produit`
--

CREATE TABLE `produit` (
  `id_produit` int(11) UNSIGNED NOT NULL,
  `nom_produit` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantite_produit` int(11) UNSIGNED NOT NULL,
  `fk_id_magasin` int(11) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `produit`
--

INSERT INTO `produit` (`id_produit`, `nom_produit`, `quantite_produit`, `fk_id_magasin`) VALUES
(2, 'Orange', 6, 0),
(3, 'Jus de fruits', 1, 2),
(6, 'Fromage', 1, 3),
(7, 'Pommes de feu', 8, 1),
(14, 'Fuze tea', 45, 1),
(24, 'eau', 2, 4);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `magasin`
--
ALTER TABLE `magasin`
  ADD PRIMARY KEY (`id_magasin`);

--
-- Index pour la table `produit`
--
ALTER TABLE `produit`
  ADD PRIMARY KEY (`id_produit`),
  ADD KEY `fk_id_magasin` (`fk_id_magasin`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `magasin`
--
ALTER TABLE `magasin`
  MODIFY `id_magasin` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `produit`
--
ALTER TABLE `produit`
  MODIFY `id_produit` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
