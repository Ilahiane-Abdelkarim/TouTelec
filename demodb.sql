-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  ven. 21 fév. 2020 à 17:43
-- Version du serveur :  10.1.38-MariaDB
-- Version de PHP :  7.1.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `toutelec`
--

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `contract`
--

CREATE TABLE `contract` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `num` bigint(20) DEFAULT NULL,
  `num_icc` bigint(20) DEFAULT NULL,
  `marque_terminal` varchar(255) NOT NULL,
  `num_imei` bigint(20) DEFAULT NULL,
  `remarque` varchar(255) NOT NULL,
  `id_client` int(11) DEFAULT NULL,
  `id_ligne` int(11) DEFAULT NULL,
  `id_enregistrement` int(11) DEFAULT NULL,
  `id_forfait` int(11) DEFAULT NULL,
  `id_distributeur` int(11) DEFAULT NULL,
  `id_responsable` int(11) DEFAULT NULL,
  `id_pointvent` int(11) DEFAULT NULL,
  `statut` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `distributeur`
--

CREATE TABLE `distributeur` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `forfaits`
--

CREATE TABLE `forfaits` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prix` float DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `pass_internet` int(11) DEFAULT NULL,
  `duree_appel` int(11) DEFAULT NULL,
  `solde` int(11) DEFAULT NULL,
  `appel_national` tinyint(1) DEFAULT NULL,
  `appel_international` tinyint(1) DEFAULT NULL,
  `appel_orange` tinyint(1) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `statut` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `forfaits`
--

INSERT INTO `forfaits` (`id`, `nom`, `prix`, `type`, `pass_internet`, `duree_appel`, `solde`, `appel_national`, `appel_international`, `appel_orange`, `date`, `statut`) VALUES
(1, 'yoo', 250, 'Moi', 5, 3, NULL, NULL, NULL, NULL, '2020-02-11', 1),
(2, 'forfait 2', 250, 'Moi', 4, 3, NULL, NULL, NULL, 1, '2020-02-14', 0),
(3, 'forfait 2', 250, 'Moi', 4, 3, NULL, NULL, NULL, 1, '2020-02-14', 0),
(4, 'forfait 3', 500, 'moi', 5, 8, 150, 1, 1, 1, '2020-02-09', 1),
(5, 'forfait 3', 500, 'moi', 5, 8, 150, 1, 1, 1, '2020-02-09', 1);

-- --------------------------------------------------------

--
-- Structure de la table `ligne`
--

CREATE TABLE `ligne` (
  `id` int(11) NOT NULL,
  `num` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `point_vent`
--

CREATE TABLE `point_vent` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `responsable`
--

CREATE TABLE `responsable` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `type_enregistrement`
--

CREATE TABLE `type_enregistrement` (
  `id` int(11) NOT NULL,
  `cin` tinyint(1) DEFAULT NULL,
  `pb` tinyint(1) DEFAULT NULL,
  `sc` tinyint(1) DEFAULT NULL,
  `rib` tinyint(1) DEFAULT NULL,
  `rc` tinyint(1) DEFAULT NULL,
  `autres` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Index pour la table `contract`
--
ALTER TABLE `contract`
  ADD KEY `id_client` (`id_client`),
  ADD KEY `id_ligne` (`id_ligne`),
  ADD KEY `id_enregistrement` (`id_enregistrement`),
  ADD KEY `id_forfait` (`id_forfait`),
  ADD KEY `id_distributeur` (`id_distributeur`),
  ADD KEY `id_responsable` (`id_responsable`),
  ADD KEY `id_pointvent` (`id_pointvent`),
  ADD KEY `id` (`id`);

--
-- Index pour la table `distributeur`
--
ALTER TABLE `distributeur`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Index pour la table `forfaits`
--
ALTER TABLE `forfaits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Index pour la table `ligne`
--
ALTER TABLE `ligne`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Index pour la table `point_vent`
--
ALTER TABLE `point_vent`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Index pour la table `responsable`
--
ALTER TABLE `responsable`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Index pour la table `type_enregistrement`
--
ALTER TABLE `type_enregistrement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `contract`
--
ALTER TABLE `contract`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `distributeur`
--
ALTER TABLE `distributeur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `forfaits`
--
ALTER TABLE `forfaits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `ligne`
--
ALTER TABLE `ligne`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `point_vent`
--
ALTER TABLE `point_vent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `responsable`
--
ALTER TABLE `responsable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `type_enregistrement`
--
ALTER TABLE `type_enregistrement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `contract`
--
ALTER TABLE `contract`
  ADD CONSTRAINT `contract_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `client` (`id`),
  ADD CONSTRAINT `contract_ibfk_2` FOREIGN KEY (`id_ligne`) REFERENCES `ligne` (`id`),
  ADD CONSTRAINT `contract_ibfk_3` FOREIGN KEY (`id_enregistrement`) REFERENCES `type_enregistrement` (`id`),
  ADD CONSTRAINT `contract_ibfk_4` FOREIGN KEY (`id_forfait`) REFERENCES `forfaits` (`id`),
  ADD CONSTRAINT `contract_ibfk_5` FOREIGN KEY (`id_distributeur`) REFERENCES `distributeur` (`id`),
  ADD CONSTRAINT `contract_ibfk_6` FOREIGN KEY (`id_responsable`) REFERENCES `responsable` (`id`),
  ADD CONSTRAINT `contract_ibfk_7` FOREIGN KEY (`id_pointvent`) REFERENCES `point_vent` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
