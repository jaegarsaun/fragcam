*This website was built for the purpose of exploring React & NextJS*
## FragCam
A one-stop shop to find and upload Counter-Strike 2 Utility lineups.

### How to run website on local
1. Clone the repository
2. Open up a terminal session and CD into the repository
3. Run `npm i` inside the folder
4. Run `npm run dev` inside the folder to load the web server

### How to setup database & Php Server
1. Download / install XAMPP
2. Run the Apache Web server & MySql Server
3. Create a new database called 'csfrags'
4. Add the following code into database:
```sql
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `csfrags`
--

-- --------------------------------------------------------

--
-- Table structure for table `userlineups`
--

CREATE TABLE `userlineups` (
  `lineupid` int(11) NOT NULL,
  `dateposted` timestamp NOT NULL DEFAULT current_timestamp(),
  `name` varchar(255) DEFAULT NULL,
  `map` varchar(50) DEFAULT NULL,
  `image` longblob DEFAULT NULL,
  `giflink` varchar(255) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


--
-- Indexes for table `userlineups`
--
ALTER TABLE `userlineups`
  ADD PRIMARY KEY (`lineupid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `userlineups`
--
ALTER TABLE `userlineups`
  MODIFY `lineupid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

```
5. Start the PHP Server
6. CD into the PHP folder in the project and run the following command
`php -S localhost:8000`



