CREATE DATABASE sebra;
use sebra;


CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `mnemonic` varchar(500) NOT NULL,
  `address` varchar(500) NOT NULL,
  `sequence` int(11) NOT NULL DEFAULT '0'
  `deleted` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;



CREATE TABLE `businesses` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `mnemonic` varchar(500) NOT NULL,
  `address` varchar(500) NOT NULL,
  `sequence` int(11) NOT NULL DEFAULT '0'
  `deleted` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `businesses`
--
ALTER TABLE `businesses`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `businesses`
--
ALTER TABLE `businesses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;



INSERT INTO customers
  (username, password, mnemonic, address)
VALUES
  ('allen', '0cc175b9c0f1b6a831c399e269772661', 'my menomnic', 'qbcde'),
  ('allen2', '0cc175b9c0f1b6a831c399e269772661', 'my other menomnic', 'abcdef')


INSERT INTO businesses
  (username, password, mnemonic, address)
VALUES
  ('biz_allen', '0cc175b9c0f1b6a831c399e269772661', 'my BIZ menomnic', '2345'),
  ('biz_allen2', '0cc175b9c0f1b6a831c399e269772661', 'my other BIZ menomnic', '12345678')