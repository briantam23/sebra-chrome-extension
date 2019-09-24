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
  `sequence` int(10) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


ALTER TABLE `businesses`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `businesses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;


INSERT INTO customers
  (username, password, mnemonic, address)
VALUES
  ('allen', '0cc175b9c0f1b6a831c399e269772661', 'some mnemonic name hello', '12313123'),
  ('allen2', '0cc175b9c0f1b6a831c399e269772661', 'another mnemonic', 'a134');

  COMMIT;
