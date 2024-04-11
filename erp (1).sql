-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2024-04-11 09:46:35
-- 伺服器版本： 10.4.28-MariaDB
-- PHP 版本： 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `erp`
--

-- --------------------------------------------------------

--
-- 資料表結構 `action`
--

CREATE TABLE `action` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `action`
--

INSERT INTO `action` (`id`, `name`) VALUES
(1, 'getSponsers'),
(2, 'newSponser'),
(3, 'updateSponser'),
(4, 'removeSponser'),
(5, 'getRaceinfo'),
(6, 'newRaceinfo'),
(7, 'updateRaceinfo'),
(8, 'removeRaceinfo'),
(9, 'getApplicants'),
(10, 'newApplicant'),
(11, 'updateApplicant'),
(12, 'removeApplicant'),
(13, 'getIdentitys'),
(14, 'newIdentity'),
(15, 'updateIdentity'),
(16, 'removeIdentity');

-- --------------------------------------------------------

--
-- 資料表結構 `applicantinfo`
--

CREATE TABLE `applicantinfo` (
  `name` varchar(255) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `catenum` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- 傾印資料表的資料 `applicantinfo`
--

INSERT INTO `applicantinfo` (`name`, `age`, `phone`, `email`, `category`, `catenum`) VALUES
('王v奔', 20, '0906233547', '2200@nkust.edu.tw', '影片比賽', 6),
('王大奔', 20, '0906962418', '110@nkust.edu.tw', '創意設計', 6),
('羅香菇', 18, '0906-123456', 'yyyyy@gmail.com', '資訊', 2);

-- --------------------------------------------------------

--
-- 資料表結構 `identity`
--

CREATE TABLE `identity` (
  `id` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- 傾印資料表的資料 `identity`
--

INSERT INTO `identity` (`id`, `password`) VALUES
('1', '123'),
('2', '1234');

-- --------------------------------------------------------

--
-- 資料表結構 `raceinfo`
--

CREATE TABLE `raceinfo` (
  `rid` int(11) NOT NULL,
  `rname` varchar(255) DEFAULT NULL,
  `rloc` varchar(255) DEFAULT NULL,
  `plimit` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- 傾印資料表的資料 `raceinfo`
--

INSERT INTO `raceinfo` (`rid`, `rname`, `rloc`, `plimit`, `date`, `category`) VALUES
(1, '綠能大未來 臺灣再生能源短影音創作競賽', '經濟部能源署', 52, '2024-03-01', '影片比賽'),
(2, '梅克獅創意設計', '國立高雄科技大學', 0, '2024-05-15', '創意設計'),
(3, ' 第29屆萬家香溫馨家園．童言童畫甄選比賽', '台灣', 15, '2024-05-27', '繪畫比賽'),
(4, ' 2024新北校園廣告人「開拍!新北市」', '       新北市政府新聞局', 0, '2024-05-31', '影像創作');

-- --------------------------------------------------------

--
-- 資料表結構 `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'customer'),
(3, '王大奔2');

-- --------------------------------------------------------

--
-- 資料表結構 `role_action`
--

CREATE TABLE `role_action` (
  `id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `action_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `role_action`
--

INSERT INTO `role_action` (`id`, `role_id`, `action_id`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 1, 2),
(4, 1, 3),
(5, 1, 4),
(6, 1, 5),
(7, 1, 6),
(8, 1, 7),
(9, 1, 8),
(10, 1, 9),
(11, 1, 10),
(12, 1, 11),
(13, 1, 12),
(14, 2, 5),
(15, 2, 9),
(16, 1, 13),
(17, 1, 14),
(18, 1, 15),
(19, 1, 16),
(20, 2, 15),
(21, 2, 1),
(22, 2, 10),
(23, 2, 6);

-- --------------------------------------------------------

--
-- 資料表結構 `sponser`
--

CREATE TABLE `sponser` (
  `sname` varchar(255) NOT NULL,
  `organiser` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- 傾印資料表的資料 `sponser`
--

INSERT INTO `sponser` (`sname`, `organiser`, `phone`, `email`) VALUES
('台灣拿福能策略整合行銷有限公司', '台灣拿福能策略整合行銷有限公司', '0225189437 #11', 'penny.hsieh@nuffnang.com'),
('教育部', '教育部', '07-6011000', 'tingchi@nkust.edu.tw'),
('零捌玖089 I POP Space+', '島藝文化有限公司', '089-349-902', '89dancecrew@gmail.com');

-- --------------------------------------------------------

--
-- 資料表結構 `supplier`
--

CREATE TABLE `supplier` (
  `su_id` int(11) NOT NULL,
  `su_name` varchar(20) NOT NULL,
  `su_contact` varchar(20) NOT NULL,
  `su_phone` varchar(20) NOT NULL,
  `su_addr` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `supplier`
--

INSERT INTO `supplier` (`su_id`, `su_name`, `su_contact`, `su_phone`, `su_addr`) VALUES
(1, 'xxx', 'aaa', '123123', 'aaaaa'),
(2, 'ooo', 'yyy', '222222', 'bbbbb'),
(3, 'ddd', 'hhhh', '45657', 'nnnnn');

-- --------------------------------------------------------

--
-- 資料表結構 `user_role`
--

CREATE TABLE `user_role` (
  `id` int(11) NOT NULL,
  `identity_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `user_role`
--

INSERT INTO `user_role` (`id`, `identity_id`, `role_id`) VALUES
(1, 1, 1),
(2, 2, 2);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `action`
--
ALTER TABLE `action`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `applicantinfo`
--
ALTER TABLE `applicantinfo`
  ADD PRIMARY KEY (`name`);

--
-- 資料表索引 `identity`
--
ALTER TABLE `identity`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `raceinfo`
--
ALTER TABLE `raceinfo`
  ADD PRIMARY KEY (`rid`);

--
-- 資料表索引 `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `role_action`
--
ALTER TABLE `role_action`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `sponser`
--
ALTER TABLE `sponser`
  ADD PRIMARY KEY (`sname`);

--
-- 資料表索引 `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`su_id`);

--
-- 資料表索引 `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `supplier`
--
ALTER TABLE `supplier`
  MODIFY `su_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
