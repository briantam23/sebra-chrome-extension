CREATE DATABASE sebra;
use sebra;

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `username` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL,
  `mnemonic` varchar(500) NOT NULL,
  `address` varchar(500) NOT NULL,
  `sequence` int(10) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `businesses` (
  `id` int(11) NOT NULL,
  `username` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL,
  `mnemonic` varchar(500) NOT NULL,
  `address` varchar(500) NOT NULL,
  `internalLookup` varchar(500) NOT NULL,
  `sequence` int(10) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--TODO: Link bought articles to businesses
CREATE TABLE `consumerarticles` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `username` varchar(500) NOT NULL,
  `url` varchar(500) NOT NULL,
  `timestamp` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


ALTER TABLE `businesses`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `businesses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `consumerarticles`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `consumerarticles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;


  COMMIT;
