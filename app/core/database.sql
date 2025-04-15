-- Add these lines at the beginning of the file, after SET time_zone
ALTER DATABASE CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

-- Update all tables to use utf8mb4
ALTER TABLE `admins` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `annual_report` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `directors` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `interest_rates` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `loans` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `loan_guarantors` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `loan_payments` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `members` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `member_fees` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `pendingloans` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `pendingmember` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `reactivation_requests` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `recurring_payments` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `rejectedloans` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `rejectedmember` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `resignation_reasons` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `savings_accounts` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `savings_goals` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `savings_transactions` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `statements` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER TABLE `user_notifications` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE TABLE `admins` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_admin` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

INSERT INTO `admins` (`id`, `username`, `email`, `password`, `is_admin`, `created_at`, `name`) VALUES
(1, 'eve', 'evegoh@gmail.com', '$2y$10$iyF5wivb0pYWIWaqS3H8O.UVvmo0Eg//PUmTt03aygcDCTEdbKwn6', 1, '2024-12-17 18:48:02', NULL),
(2, 'nyh', 'yuhin02@gmail.com', '$2y$10$TBIbbct7t.HZiT16RbJvZeln1TWwmejWLa/iuLGQknKo48wY5yZoi', 1, '2024-12-17 20:35:58', NULL),
(6, 'yk', 'yk@gmail.com', '$2y$10$ijpC93q.kHcgGE5Bxhr0uepocaTtZfqFyMuLUyZQmlOB5QuAmyNm2', 1, '2025-01-01 01:09:41', NULL),
(7, 'chew', 'chewchiuxian@graduate.utm.my', '$2y$10$0QJmafqKzfqoCtML8tj7rejnN4fKAonyZmVbr9YV.lrGM/7VovsyK', 1, '2025-01-01 13:26:25', NULL);

CREATE TABLE `annual_report` (
  `id` int NOT NULL,
  `year` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `file_path` varchar(255) NOT NULL,
  `file_size` int NOT NULL,
  `description` text,
  `uploaded_by` int NOT NULL,
  `uploaded_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` enum('active','archived') DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

INSERT INTO `annual_report` (`id`, `year`, `title`, `file_name`, `file_path`, `file_size`, `description`, `uploaded_by`, `uploaded_at`, `updated_at`, `status`) VALUES
(3, 2024, 'Laporan Tahunan 2024', 'annual_report_2024_67ae509b0a98d.pdf', '/uploads/annual-reports/annual_report_2024_67ae509b0a98d.pdf', 17547273, NULL, 6, '2025-02-13 20:05:47', '2025-02-13 20:05:47', 'active'),
(4, 2025, 'Laporan Tahunan 2025', 'annual_report_2025_67ae50b39c174.pdf', '/uploads/annual-reports/annual_report_2025_67ae50b39c174.pdf', 405660, NULL, 6, '2025-02-13 20:06:11', '2025-02-13 20:06:11', 'active'),
(5, 2023, 'Laporan Tahunan 2023', 'annual_report_2023_67ae50c3e9744.pdf', '/uploads/annual-reports/annual_report_2023_67ae50c3e9744.pdf', 172220, NULL, 6, '2025-02-13 20:06:27', '2025-02-13 20:06:27', 'active'),
(6, 2022, 'Laporan Tahunan 2022', 'annual_report_2022_67ae50dfadc70.pdf', '/uploads/annual-reports/annual_report_2022_67ae50dfadc70.pdf', 234165, NULL, 6, '2025-02-13 20:06:55', '2025-02-13 20:06:55', 'active');

CREATE TABLE `directors` (
  `id` int NOT NULL,
  `director_id` varchar(20) CHARACTER SET utf8mb4  DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `position` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `department` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `phone_number` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'active',
  `last_login` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci;

INSERT INTO `directors` (`id`, `director_id`, `username`, `name`, `email`, `password`, `position`, `department`, `phone_number`, `status`, `last_login`, `created_at`, `updated_at`) VALUES
(1, NULL, 'director', 'Director KADA', 'director@kada.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Pengarah', 'Pengurusan', '012-34567811', 'active', NULL, '2025-01-14 11:20:05', '2025-02-13 20:13:28'),
(4, 'DIR20250001', 'DIR001', 'Director 1 ', 'director@kada.co', '$2y$10$uS7OoYW8zHHHPg4HfgQWcOmUl6Eg48msdVtVixmmhVujIaEsg0gPa', 'Pengarah Eksekutif', 'Pengurusan', '011', 'active', '2025-02-15 22:15:36', '2025-01-14 11:45:06', '2025-02-15 14:15:36'),
(5, 'DIR20250002', 'DIR002', 'CXX', 'kada@gmail.com', '$2y$10$oYCeJdLO/qQj26hmPhgJpOr7oxZqeQ6QHoSAF2Zqf35mbbsXN.vli', 'Pengarah Eksekutif', 'Kewangan', '01231231123', 'active', NULL, '2025-02-13 20:14:25', '2025-02-13 20:14:25');

CREATE TABLE `interest_rates` (
  `id` int NOT NULL,
  `savings_rate` decimal(5,2) NOT NULL DEFAULT '0.00',
  `loan_rate` decimal(5,2) NOT NULL DEFAULT '0.00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

INSERT INTO `interest_rates` (`id`, `savings_rate`, `loan_rate`, `updated_at`) VALUES
(1, '2.50', '4.09', '2025-02-14 12:39:44');

CREATE TABLE `loans` (
  `id` int NOT NULL,
  `reference_no` varchar(20) NOT NULL,
  `member_id` int NOT NULL,
  `loan_type` enum('al_bai','al_innah','skim_khas','road_tax','al_qardhul','other') NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `duration` int NOT NULL,
  `monthly_payment` decimal(10,2) NOT NULL,
  `status` enum('pending','approved','rejected','completed') NOT NULL DEFAULT 'pending',
  `date_received` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `bank_name` varchar(50) NOT NULL,
  `bank_account` varchar(20) NOT NULL,
  `approved_by` int DEFAULT NULL,
  `approved_at` timestamp NULL DEFAULT NULL,
  `remarks` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

INSERT INTO `loans` (`id`, `reference_no`, `member_id`, `loan_type`, `amount`, `duration`, `monthly_payment`, `status`, `date_received`, `updated_at`, `bank_name`, `bank_account`, `approved_by`, `approved_at`, `remarks`) VALUES
(1, 'LOAN202501214612', 12, 'al_innah', '20000.00', 12, '1736.67', 'approved', '2025-01-21 01:14:45', '2025-01-21 17:09:46', 'CIMB Bank', '1290812312', 4, '2025-01-21 17:09:46', 'Noted.'),
(2, 'LOAN202501188719', 12, 'skim_khas', '24000.00', 24, '1042.00', 'approved', '2025-01-18 05:41:09', '2025-01-22 07:58:16', 'Bank Rakyat', '1258921', 4, '2025-01-22 07:58:16', 'Approved\r\n'),
(3, 'LOAN202501221422', 13, 'al_qardhul', '25000.00', 24, '1085.42', 'approved', '2025-01-22 13:32:28', '2025-01-22 21:50:03', 'Maybank', '10289328031', 4, '2025-01-22 21:50:03', ''),
(4, 'LOAN202501227082', 13, 'skim_khas', '8500.00', 12, '738.08', 'approved', '2025-01-22 13:33:44', '2025-01-22 21:50:14', 'Public Bank', '1391028372', 4, '2025-01-22 21:50:14', ''),
(6, 'LOAN202502126526', 21, 'al_innah', '8000.00', 12, '694.67', 'approved', '2025-02-12 17:44:56', '2025-02-12 17:44:56', 'RHB Bank', '1234567890', 4, '2025-02-12 09:44:56', NULL),
(8, 'LOAN202502137347', 21, 'skim_khas', '4000.00', 56, '74.43', 'approved', '2025-02-13 02:20:31', '2025-02-13 02:20:31', 'RHB Bank', '1234567890', 4, '2025-02-12 18:20:31', NULL),
(9, 'LOAN202502135273', 21, 'road_tax', '455.00', 12, '39.51', 'approved', '2025-02-13 02:55:26', '2025-02-13 02:55:26', 'Bank Rakyat', '1234567890', 4, '2025-02-12 18:55:26', NULL),
(10, 'LOAN202502147038', 21, 'al_innah', '5000.00', 24, '217.08', 'approved', '2025-02-14 12:41:56', '2025-02-14 12:41:56', 'RHB Bank', '89878786', 4, '2025-02-14 04:41:56', NULL);
DELIMITER $$
CREATE TRIGGER `after_loan_approval` AFTER INSERT ON `loans` FOR EACH ROW BEGIN
    IF NEW.status = 'approved' THEN
        INSERT INTO recurring_payments (
            loan_id,
            monthly_payment,
            next_deduction_date,
            status,
            created_at,
            updated_at
        ) VALUES (
            NEW.id,
            NEW.monthly_payment,
            DATE_ADD(CURDATE(), INTERVAL 1 MONTH),
            'active',
            NOW(),
            NOW()
        );
    END IF;
END
$$
DELIMITER ;

CREATE TABLE `loan_guarantors` (
  `id` int NOT NULL,
  `loan_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `ic_no` varchar(14) NOT NULL,
  `home_address` varchar(255) NOT NULL,
  `member_id` varchar(10) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

CREATE TABLE `loan_payments` (
  `id` int NOT NULL,
  `loan_id` int NOT NULL,
  `payment_amount` decimal(10,2) NOT NULL,
  `remaining_balance` decimal(10,2) NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `payment_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `loan_payments` (`id`, `loan_id`, `payment_amount`, `remaining_balance`, `description`, `payment_date`, `created_at`, `updated_at`) VALUES
(1, 1, '671.16', '19254.66', 'Pembayaran bulanan', '2024-02-04', '2024-02-19 20:00:00', '2024-07-20 21:00:00'),
(2, 1, '1259.86', '18768.01', 'Bayaran ansuran', '2024-04-07', '2024-08-30 20:00:00', '2024-01-18 17:00:00'),
(3, 1, '1079.58', '19242.74', 'Pembayaran awal', '2024-05-10', '2024-05-31 03:00:00', '2024-08-07 03:00:00'),
(4, 1, '618.67', '19119.44', 'Bayaran ansuran', '2024-06-12', '2024-12-19 19:00:00', '2024-10-26 03:00:00'),
(5, 1, '873.17', '19338.60', 'Bayaran ansuran', '2024-07-02', '2024-08-17 22:00:00', '2024-12-29 16:00:00'),
(6, 1, '912.90', '18914.15', 'Pembayaran bulanan', '2024-07-28', '2024-01-03 21:00:00', '2024-02-02 17:00:00'),
(7, 1, '1372.06', '18703.18', 'Bayaran ansuran', '2025-01-05', '2024-03-14 17:00:00', '2024-12-12 18:00:00'),
(8, 1, '1311.65', '18822.90', 'Bayaran separa', '2025-01-09', '2024-09-21 22:00:00', '2024-08-20 21:00:00'),
(9, 2, '527.88', '23442.90', 'Bayaran separa', '2024-02-18', '2024-04-29 18:00:00', '2024-12-31 18:00:00'),
(10, 2, '832.49', '23541.03', 'Pembayaran awal', '2024-03-23', '2024-11-17 22:00:00', '2024-01-27 01:00:00'),
(11, 2, '319.91', '23578.56', 'Bayaran separa', '2024-05-29', '2024-12-21 21:00:00', '2024-06-26 03:00:00'),
(12, 2, '710.94', '23356.91', 'Pembayaran bulanan', '2024-07-07', '2024-11-05 22:00:00', '2024-04-25 02:00:00'),
(13, 2, '454.91', '23317.05', 'Bayaran ansuran', '2024-07-28', '2024-07-13 02:00:00', '2024-12-21 03:00:00'),
(14, 2, '512.65', '23513.91', 'Bayaran ansuran', '2024-08-07', '2024-04-23 01:00:00', '2024-12-27 20:00:00'),
(15, 2, '648.79', '23582.48', 'Bayaran separa', '2024-10-18', '2024-07-28 21:00:00', '2024-09-18 16:00:00'),
(16, 2, '398.60', '23676.72', 'Bayaran ansuran', '2025-01-13', '2024-01-20 20:00:00', '2024-07-24 23:00:00'),
(17, 3, '832.28', '24442.39', 'Pembayaran awal', '2024-06-04', '2025-01-20 01:00:00', '2024-11-21 02:00:00'),
(18, 3, '387.15', '24596.87', 'Pembayaran awal', '2024-06-20', '2024-02-02 17:00:00', '2024-04-07 03:00:00'),
(19, 3, '519.20', '24209.86', 'Bayaran separa', '2024-07-05', '2024-10-24 20:00:00', '2024-10-18 22:00:00'),
(20, 3, '586.55', '24479.59', 'Pembayaran awal', '2024-09-22', '2024-05-21 01:00:00', '2024-10-12 20:00:00'),
(21, 3, '710.67', '24320.89', 'Bayaran separa', '2024-09-23', '2024-01-20 18:00:00', '2024-11-16 22:00:00'),
(22, 3, '389.11', '24460.10', 'Bayaran ansuran', '2024-12-27', '2024-10-31 17:00:00', '2024-05-16 20:00:00'),
(23, 3, '780.28', '24316.23', 'Pembayaran bulanan', '2025-01-04', '2024-06-03 17:00:00', '2024-07-22 18:00:00'),
(24, 3, '555.52', '24665.83', 'Pembayaran bulanan', '2025-01-20', '2024-07-27 00:00:00', '2025-01-01 23:00:00'),
(25, 4, '321.13', '7991.12', 'Bayaran separa', '2024-02-02', '2024-03-04 23:00:00', '2024-06-11 20:00:00'),
(26, 4, '375.53', '8186.32', 'Pembayaran bulanan', '2024-04-01', '2024-03-13 18:00:00', '2024-08-28 20:00:00'),
(27, 4, '335.44', '8145.99', 'Pembayaran bulanan', '2024-04-14', '2024-10-14 02:00:00', '2024-03-31 22:00:00'),
(28, 4, '432.21', '8146.99', 'Bayaran separa', '2024-04-17', '2024-03-08 16:00:00', '2024-10-01 20:00:00'),
(29, 4, '299.56', '8236.34', 'Pembayaran bulanan', '2024-05-12', '2024-12-13 21:00:00', '2024-09-06 01:00:00'),
(30, 4, '326.53', '8216.50', 'Pembayaran bulanan', '2024-06-15', '2024-03-10 23:00:00', '2024-08-12 16:00:00'),
(31, 4, '411.36', '8140.74', 'Pembayaran awal', '2024-07-11', '2024-07-17 16:00:00', '2024-11-22 03:00:00'),
(32, 4, '489.85', '8181.76', 'Bayaran separa', '2024-11-30', '2024-12-20 16:00:00', '2024-04-10 19:00:00');

CREATE TABLE `members` (
  `id` int NOT NULL,
  `member_id` varchar(8) CHARACTER SET utf8mb4  DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ic_no` varchar(20) CHARACTER SET utf8mb4  NOT NULL,
  `gender` varchar(20) CHARACTER SET utf8mb4  DEFAULT NULL,
  `religion` varchar(50) CHARACTER SET utf8mb4  DEFAULT NULL,
  `race` varchar(50) CHARACTER SET utf8mb4  DEFAULT NULL,
  `marital_status` varchar(20) CHARACTER SET utf8mb4  DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4  DEFAULT NULL,
  `position` varchar(100) CHARACTER SET utf8mb4  DEFAULT NULL,
  `grade` varchar(20) CHARACTER SET utf8mb4  DEFAULT NULL,
  `monthly_salary` decimal(10,2) DEFAULT NULL,
  `home_address` text CHARACTER SET utf8mb4 ,
  `home_postcode` varchar(10) CHARACTER SET utf8mb4  DEFAULT NULL,
  `home_state` varchar(50) CHARACTER SET utf8mb4  DEFAULT NULL,
  `office_address` text CHARACTER SET utf8mb4 ,
  `office_postcode` varchar(10) CHARACTER SET utf8mb4  DEFAULT NULL,
  `office_phone` varchar(20) CHARACTER SET utf8mb4  DEFAULT NULL,
  `home_phone` varchar(20) CHARACTER SET utf8mb4  DEFAULT NULL,
  `fax` varchar(20) CHARACTER SET utf8mb4  DEFAULT NULL,
  `family_relationship` varchar(50) CHARACTER SET utf8mb4  DEFAULT NULL,
  `family_name` varchar(255) CHARACTER SET utf8mb4  DEFAULT NULL,
  `family_ic` varchar(20) CHARACTER SET utf8mb4  DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4  DEFAULT NULL,
  `status` varchar(20) CHARACTER SET utf8mb4  DEFAULT 'Active',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `mobile_phone` varchar(20) CHARACTER SET utf8mb4  DEFAULT NULL,
  `resigned_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci;

INSERT INTO `members` (`id`, `member_id`, `name`, `ic_no`, `gender`, `religion`, `race`, `marital_status`, `email`, `position`, `grade`, `monthly_salary`, `home_address`, `home_postcode`, `home_state`, `office_address`, `office_postcode`, `office_phone`, `home_phone`, `fax`, `family_relationship`, `family_name`, `family_ic`, `password`, `status`, `created_at`, `updated_at`, `mobile_phone`, `resigned_at`) VALUES
(12, '20250006', 'CHEW CX', '222222-22-2222', 'Male', 'Kristian', 'Malay', 'Single', NULL, 'Free Rider', 'VK6', '300.00', 'K', '33', 'Sarawak', 'BHJKL', '8', '0199665555', '0199665555', '55555', 'Mother', 'gggg', '999999-99-9999', '$2y$10$nMsdE4zfPsGTSN74p3csO.KLp.1HMy3X/7fqbP1Vps4l6U8VVgBfy', 'Active', '2025-01-16 10:24:42', '2025-02-12 17:17:40', NULL, NULL),
(13, '20250007', 'MUHAMMAD TAUFIQ BIN ABDULLAH', '981114-01-2841', 'Male', 'Islam', 'Malay', 'Single', NULL, 'PEGAWAI PERUBATAN', 'DUG54', '6400.00', 'NO 195, JLN PADI RIA 19, BANDAR UDA UTAMA, 81200 JOHOR BARHU, JOHOR', '81200', 'JOHOR', 'EY, B-15, MEDINI 9, PERSIARAN MEDINI SENTRAL 1, BANDAR, 79250 ISKANDAR PUTERI, JOHOR', '79250', '075209290', '075201932', '074191292', 'Father', 'AHMAD FIRDAUS', '691204-12-1248', NULL, 'Active', '2025-01-22 21:30:03', '2025-01-22 21:30:03', NULL, NULL),
(21, '20250009', 'EVE', '021223-33-3344', 'Female', 'Islam', 'Malay', 'Single', 'evegoh1111@gmail.com', 'Fefe', 'VU1', '12345.00', 'SDD', '32333', 'PERAK', 'DDWW', '13211', '3231', '3133', '312313', 'Father', 'dss', '323424-24-3442', '$2y$10$I9XiNiRPva1Os.eziq0MuOvkd0zlxvUgmpxpb5kJnO9QAG5CgVvwO', 'Active', '2025-01-30 07:38:30', '2025-01-30 07:38:49', NULL, NULL),
(22, '20250010', 'LYNN', '011125-54-4333', 'Female', 'Buddha', 'Chinese', 'Single', 'evegoh1111@gmail.com', 'Efew', 'VU3', '13132.00', 'ADAD', '23232', 'TERENGGANU', 'QEQEE', '33232', '223', '31313', '323', 'Father', 'wwewew', '232324-34-3444', '$2y$10$8i7dllfCcJXmIiAW998tOuS08F0dcN0RukAVh4df6M1g5p5m4M7hO', 'Active', '2025-01-30 07:39:58', '2025-01-30 07:40:30', NULL, NULL),
(23, '20250011', 'LALALA', '011212-22-2222', 'Female', 'Buddha', 'Chinese', 'Berkahwin', 'evegoh1111@gmail.com', 'Fddf', 'VU2', '23456.00', 'SDFF', '23232', 'Kelantan', 'WEEEWEWE', '32323', NULL, '232323', '322', 'Father', 'wewewe', '323233-13-1333', '$2y$10$pkdhIMOBMqJnCE766GUjQ.iGtitHU9Vb9kSmbfU3d8f7ukFZV6apa', 'Resigned', '2025-01-30 07:48:28', '2025-02-13 18:50:02', '012-19223123', '2025-02-14 02:19:57'),
(25, '20250012', 'TESTING', '120112-38-0918', 'Male', 'Buddha', 'Indian', 'Single', 'lauyankaii@gmail.com', 'Ashld', 'VU2', '1298.00', 'OIJDA, 91023 ', '91023', 'SABAH', 'UKAHDS 90880', '90880', '19023', '081213', '0810923', 'Father', 'shfjh1', '217391-73-9112', NULL, 'Active', '2025-02-13 14:14:27', '2025-02-13 14:14:27', NULL, NULL),
(27, '20250013', 'KAJSAL', '120123-89-7183', 'Female', 'Kristian', 'Malay', 'Single', 'lauyankaii@gmail.com', 'Sadj', 'VU2', '218.00', 'KAJSD, 12032 ', '12032', 'PULAU PINANG', 'ASKD, 90123', '90123', '12738', '0981032', '038102', 'Sibling', 'hshdakda', '991273-01-8321', NULL, 'Active', '2025-02-13 14:25:02', '2025-02-13 14:25:02', NULL, NULL),
(28, '20250014', 'KOLE KL', '091201-91-2312', 'Female', 'Buddha', 'Malay', 'Single', 'lauyankaii@gmail.com', 'ASSADH', 'VU1', '12312.00', 'AJDSH 10921 ', '10921', 'PULAU PINANG', 'SAHKJ S 01983', '01983', '123123', '09812', '123', 'Father', 'SAD', '910111-21-8793', '$2y$10$oirC6ZyWmzzykCOjTPU/Q.Xsjx39I6qFNvxrn3qW9IXp2tOXoPmkK', 'Inactive', '2025-02-14 08:37:09', '2025-02-14 08:45:54', NULL, '2025-02-14 16:45:54'),
(29, '20250015', 'AHMAD C', '910123-29-2312', 'Male', 'Islam', 'Malay', 'Single', NULL, 'FREE', 'VU1', '123132.00', 'ASD', '123', 'Sabah', '123', '123', '123', '123', '132', 'Mother', '123', '121111-12-3910', NULL, 'Active', '2025-02-14 12:38:57', '2025-02-14 12:38:57', NULL, NULL),
(33, '20250016', ' DSDSF', '020212-12-7244', 'Male', 'Kristian', 'Chinese', 'Single', 'lauyankaii@gmail.com', 'Grew', 'VU6', '23312.00', 'FDG 23423', '23423', 'TERENGGANU', '12411', '12411', '124', '12412', '1241', 'Sibling', '1241', '23253', '$2y$10$jvKOrBIbuzE9h4H72fbRfOgMPiNHVd2wC3bXawRx2HsmyntDhv/vG', 'Active', '2025-02-15 13:54:33', '2025-02-15 13:55:00', NULL, NULL);

CREATE TABLE `member_fees` (
  `id` int NOT NULL,
  `member_id` int NOT NULL,
  `registration_fee` decimal(10,2) NOT NULL DEFAULT '20.00',
  `share_capital` decimal(10,2) NOT NULL DEFAULT '100.00',
  `membership_fee` decimal(10,2) NOT NULL DEFAULT '10.00',
  `welfare_fund` decimal(10,2) NOT NULL DEFAULT '10.00',
  `payment_status` enum('pending','completed','failed') NOT NULL DEFAULT 'pending',
  `payment_method` varchar(50) DEFAULT NULL,
  `payment_reference` varchar(100) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `paid_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `member_fees` (`id`, `member_id`, `registration_fee`, `share_capital`, `membership_fee`, `welfare_fund`, `payment_status`, `payment_method`, `payment_reference`, `created_at`, `paid_at`) VALUES
(1, 23, '20.00', '100.00', '10.00', '10.00', 'pending', NULL, NULL, '2025-02-13 22:50:03', NULL),
(2, 21, '20.00', '100.00', '10.00', '10.00', 'pending', NULL, NULL, '2025-02-15 20:12:32', NULL),
(3, 33, '20.00', '100.00', '10.00', '10.00', 'pending', NULL, NULL, '2025-02-15 21:55:02', NULL);

CREATE TABLE `pendingloans` (
  `id` int NOT NULL,
  `reference_no` varchar(50) NOT NULL,
  `member_id` int NOT NULL,
  `loan_type` enum('al_bai','al_innah','skim_khas','road_tax','al_qardhul','other') NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `duration` int NOT NULL,
  `monthly_payment` decimal(10,2) NOT NULL,
  `status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending',
  `date_received` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `bank_name` varchar(25) DEFAULT NULL,
  `bank_account` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `pendingmember` (
  `id` int NOT NULL,
  `reference_no` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL,
  `ic_no` varchar(22) CHARACTER SET utf8mb4  DEFAULT NULL,
  `age` int DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `gender` enum('Male','Female') CHARACTER SET utf8mb4  NOT NULL,
  `religion` varchar(50) CHARACTER SET utf8mb4  NOT NULL,
  `race` varchar(50) CHARACTER SET utf8mb4  NOT NULL,
  `marital_status` enum('Single','Married','Divorced','Widowed') CHARACTER SET utf8mb4  NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4  DEFAULT NULL,
  `position` varchar(100) CHARACTER SET utf8mb4  NOT NULL,
  `grade` varchar(50) CHARACTER SET utf8mb4  NOT NULL,
  `monthly_salary` decimal(10,2) NOT NULL,
  `home_address` text CHARACTER SET utf8mb4  NOT NULL,
  `home_postcode` varchar(10) CHARACTER SET utf8mb4  NOT NULL,
  `home_state` varchar(50) CHARACTER SET utf8mb4  NOT NULL,
  `office_address` text CHARACTER SET utf8mb4  NOT NULL,
  `office_postcode` varchar(10) CHARACTER SET utf8mb4  NOT NULL,
  `office_phone` varchar(20) CHARACTER SET utf8mb4  NOT NULL,
  `home_phone` varchar(20) CHARACTER SET utf8mb4  NOT NULL,
  `fax` varchar(20) CHARACTER SET utf8mb4  DEFAULT NULL,
  `family_relationship` text CHARACTER SET utf8mb4  NOT NULL,
  `family_name` text CHARACTER SET utf8mb4  NOT NULL,
  `family_ic` text CHARACTER SET utf8mb4  NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` enum('Pending','Lulus','Tolak') CHARACTER SET utf8mb4  DEFAULT 'Pending',
  `mobile_phone` varchar(20) CHARACTER SET utf8mb4  DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci;

INSERT INTO `pendingmember` (`id`, `reference_no`, `name`, `ic_no`, `age`, `birthday`, `gender`, `religion`, `race`, `marital_status`, `email`, `position`, `grade`, `monthly_salary`, `home_address`, `home_postcode`, `home_state`, `office_address`, `office_postcode`, `office_phone`, `home_phone`, `fax`, `family_relationship`, `family_name`, `family_ic`, `created_at`, `updated_at`, `status`, `mobile_phone`) VALUES
(17, 'REF202501210001', 'AHMAD IQBAL', '880123-91-9123', NULL, NULL, 'Male', 'Islam', 'Malay', 'Single', NULL, 'Aha', 'VU1', '123.00', 'OIU', '1231', 'WP Kuala Lumpur', '123', '123', '123', '123', '12', 'Mother', 'sad', '123132-12-3132', '2025-01-21 18:22:45', '2025-01-21 18:22:45', 'Pending', NULL),
(19, 'REF202501210003', 'AHMAD E', '190312-39-1023', 12, '2012-11-22', 'Female', 'Islam', 'Chinese', 'Single', NULL, 'Free', 'VU1', '12312.00', 'NO 59, JLN UNITE, TMN MS, 81032 JOHOR', '81032', 'JOHOR', '123, WISMA KFC, TMN KL, 15920 KELANTAN ', '15920', '1231', '3123', '123', 'Father', 'RJ', '121122-31-2312', '2025-01-21 18:54:40', '2025-01-21 18:54:40', 'Pending', NULL),
(39, 'REF202502140001', 'ASDAH', '020212-12-7931', NULL, NULL, 'Female', 'Hindu', 'Malay', 'Single', 'lauyankaii@gmail.com', 'Ahs', 'VU1', '12312.00', 'ADSH 93211', '93211', 'SARAWAK', '12321', '12321', '123', '123', '123', 'Father', '123', '123123-12-3123', '2025-02-14 12:25:47', '2025-02-14 12:25:47', 'Pending', NULL);

CREATE TABLE `reactivation_requests` (
  `id` int NOT NULL,
  `member_id` int NOT NULL,
  `reasons` text NOT NULL,
  `created_at` datetime NOT NULL,
  `approved_at` datetime DEFAULT NULL,
  `status` enum('Pending','Approved','Rejected') DEFAULT 'Pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

INSERT INTO `reactivation_requests` (`id`, `member_id`, `reasons`, `created_at`, `approved_at`, `status`) VALUES
(1, 23, '1. As', '2025-02-14 02:55:34', NULL, 'Pending');

CREATE TABLE `recurring_payments` (
  `id` int NOT NULL,
  `loan_id` int NOT NULL,
  `monthly_payment` decimal(10,2) NOT NULL,
  `next_deduction_date` date DEFAULT NULL,
  `status` enum('active','inactive') NOT NULL DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

INSERT INTO `recurring_payments` (`id`, `loan_id`, `monthly_payment`, `next_deduction_date`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, '1736.67', '2025-02-14', 'active', '2025-02-12 18:00:44', '2025-02-12 18:00:44'),
(2, 2, '1042.00', '2025-02-14', 'active', '2025-02-12 18:00:44', '2025-02-12 18:00:44'),
(3, 3, '1085.42', '2025-02-14', 'active', '2025-02-12 18:00:44', '2025-02-12 18:00:44'),
(4, 4, '738.08', '2025-02-14', 'active', '2025-02-12 18:00:44', '2025-02-12 18:00:44'),
(6, 6, '700.00', '2025-03-05', 'active', '2025-02-12 18:00:44', '2025-02-13 02:06:10'),
(7, 8, '74.44', '2025-03-13', 'active', '2025-02-13 02:31:47', '2025-02-13 02:38:51'),
(8, 9, '39.51', '2025-03-13', 'active', '2025-02-13 02:55:26', '2025-02-13 02:55:26'),
(9, 10, '217.08', '2025-03-14', 'active', '2025-02-14 12:41:56', '2025-02-14 12:41:56');

CREATE TABLE `rejectedloans` (
  `id` int NOT NULL,
  `reference_no` varchar(20) NOT NULL,
  `member_id` int NOT NULL,
  `loan_type` enum('al_bai','al_innah','skim_khas','road_tax','al_qardhul','other') NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `duration` int NOT NULL,
  `monthly_payment` decimal(10,2) NOT NULL,
  `status` enum('pending','approved','rejected') NOT NULL DEFAULT 'rejected',
  `date_received` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `bank_name` varchar(50) NOT NULL,
  `bank_account` varchar(20) NOT NULL,
  `rejected_by` int DEFAULT NULL,
  `rejected_at` timestamp NULL DEFAULT NULL,
  `remarks` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

INSERT INTO `rejectedloans` (`id`, `reference_no`, `member_id`, `loan_type`, `amount`, `duration`, `monthly_payment`, `status`, `date_received`, `updated_at`, `bank_name`, `bank_account`, `rejected_by`, `rejected_at`, `remarks`) VALUES
(1, 'LOAN202501194120', 6, 'al_bai', '14400.00', 12, '1250.40', 'approved', '2025-01-18 21:13:59', '2025-01-21 17:11:28', 'Hong Leong Bank', '252352', 4, '2025-01-21 17:11:28', 'thx'),
(3, 'LOAN202501226265', 12, 'al_innah', '20000.00', 12, '1736.67', 'rejected', '2025-01-22 00:07:04', '2025-02-15 12:09:42', 'Bank Rakyat', '12798123121', 4, '2025-02-15 04:09:42', '');

CREATE TABLE `rejectedmember` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL,
  `ic_no` varchar(20) CHARACTER SET utf8mb4  NOT NULL,
  `gender` varchar(20) CHARACTER SET utf8mb4  DEFAULT NULL,
  `religion` varchar(50) CHARACTER SET utf8mb4  DEFAULT NULL,
  `race` varchar(50) CHARACTER SET utf8mb4  DEFAULT NULL,
  `marital_status` varchar(20) CHARACTER SET utf8mb4  DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4  DEFAULT NULL,
  `position` varchar(100) CHARACTER SET utf8mb4  DEFAULT NULL,
  `grade` varchar(20) CHARACTER SET utf8mb4  DEFAULT NULL,
  `monthly_salary` decimal(10,2) DEFAULT NULL,
  `home_address` text CHARACTER SET utf8mb4 ,
  `home_postcode` varchar(10) CHARACTER SET utf8mb4  DEFAULT NULL,
  `home_state` varchar(50) CHARACTER SET utf8mb4  DEFAULT NULL,
  `office_address` text CHARACTER SET utf8mb4 ,
  `office_postcode` varchar(10) CHARACTER SET utf8mb4  DEFAULT NULL,
  `office_phone` varchar(20) CHARACTER SET utf8mb4  DEFAULT NULL,
  `home_phone` varchar(20) CHARACTER SET utf8mb4  DEFAULT NULL,
  `fax` varchar(20) CHARACTER SET utf8mb4  DEFAULT NULL,
  `family_relationship` varchar(50) CHARACTER SET utf8mb4  DEFAULT NULL,
  `family_name` varchar(255) CHARACTER SET utf8mb4  DEFAULT NULL,
  `family_ic` varchar(20) CHARACTER SET utf8mb4  DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4  DEFAULT NULL,
  `status` varchar(20) CHARACTER SET utf8mb4  DEFAULT 'Inactive',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `mobile_phone` varchar(20) CHARACTER SET utf8mb4  DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci;

INSERT INTO `rejectedmember` (`id`, `name`, `ic_no`, `gender`, `religion`, `race`, `marital_status`, `email`, `position`, `grade`, `monthly_salary`, `home_address`, `home_postcode`, `home_state`, `office_address`, `office_postcode`, `office_phone`, `home_phone`, `fax`, `family_relationship`, `family_name`, `family_ic`, `password`, `status`, `created_at`, `updated_at`, `mobile_phone`) VALUES
(6, 'TEST', '011111-11-1111', 'Male', 'Others-Religion', 'Malay', 'Single', NULL, '124', 'VU1', '24444.00', 'AD', '1212', 'WP Labuan', '1', '2', '1', '1', '1', 'Mother', 'a', '111111-41-1111', NULL, 'Inactive', '2025-01-15 02:16:53', '2025-01-15 02:16:53', NULL),
(8, 'TEO KAH WEE', '880011-01-0129', 'Male', 'Islam', 'Malay', 'Married', NULL, 'Doctor', 'VU1', '12000.00', 'JLN MALAYSIA 1', '81300', 'WP Kuala Lumpur', 'JLN SNP', '91320', '123', '0123', '123', 'Mother', 'TESTING L', '109182-11-2232', NULL, 'Inactive', '2025-02-13 19:19:32', '2025-02-13 19:19:32', NULL);

CREATE TABLE `resignation_reasons` (
  `id` int NOT NULL,
  `member_id` int NOT NULL,
  `created_at` datetime NOT NULL,
  `reasons` text NOT NULL,
  `approved_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

INSERT INTO `resignation_reasons` (`id`, `member_id`, `created_at`, `reasons`, `approved_at`) VALUES
(13, 23, '2025-02-14 02:19:57', '1. NO 1\n2. NO 2\n3. NO 3\n4. NO 4\n5. NO 5', '2025-02-14 02:50:02'),
(15, 28, '2025-02-14 16:45:54', '1. 啊啊啊\n2. 啧啧啧\n3. 擦擦擦', NULL);

CREATE TABLE `savings_accounts` (
  `id` int NOT NULL,
  `account_number` varchar(20) DEFAULT NULL,
  `member_id` int NOT NULL,
  `current_amount` decimal(10,2) DEFAULT '0.00',
  `status` enum('active','completed','cancelled') DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

INSERT INTO `savings_accounts` (`id`, `account_number`, `member_id`, `current_amount`, `status`, `created_at`, `updated_at`) VALUES
(29, 'SAV-000012-5441', 12, '940.00', 'active', '2025-01-16 10:24:42', '2025-01-18 07:35:33'),
(30, 'SAV-000013-6893', 13, '24124.03', 'active', '2025-01-22 21:30:03', '2025-01-22 21:48:24'),
(33, 'SAV-000021-4321', 21, '960.00', 'active', '2025-02-11 14:17:24', '2025-02-13 04:27:44'),
(34, 'SAV-000022-5432', 22, '750.00', 'active', '2025-02-11 14:17:24', '2025-02-11 14:17:24'),
(35, 'SAV-000023-6543', 23, '1030.00', 'active', '2025-02-11 14:17:24', '2025-02-13 04:19:59'),
(37, 'SAV-000025-4966', 25, '0.00', 'active', '2025-02-13 14:14:27', '2025-02-13 14:14:27'),
(39, 'SAV-000027-8160', 27, '0.00', 'active', '2025-02-13 14:25:02', '2025-02-13 14:25:02'),
(40, 'SAV-000028-3184', 28, '0.00', 'active', '2025-02-14 08:37:09', '2025-02-14 08:37:09'),
(41, 'SAV-000029-6642', 29, '0.00', 'active', '2025-02-14 12:38:57', '2025-02-14 12:38:57'),
(45, 'SAV-000033-5993', 33, '0.00', 'active', '2025-02-15 13:54:33', '2025-02-15 13:54:33');

CREATE TABLE `savings_goals` (
  `id` int NOT NULL,
  `member_id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `target_amount` decimal(10,2) NOT NULL,
  `current_amount` decimal(10,2) DEFAULT '0.00',
  `target_date` date NOT NULL,
  `monthly_target` decimal(10,2) DEFAULT '0.00',
  `status` enum('active','completed','cancelled') DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

INSERT INTO `savings_goals` (`id`, `member_id`, `name`, `target_amount`, `current_amount`, `target_date`, `monthly_target`, `status`, `created_at`, `updated_at`) VALUES
(4, 9, 'Simpanan Rumah', '1900.00', '0.00', '2025-02-27', '1900.00', 'active', '2025-01-14 16:26:20', '2025-01-16 08:56:45'),
(5, 9, '2333', '24444.00', '0.00', '2025-02-28', '24444.00', 'active', '2025-01-16 08:32:36', '2025-01-16 08:32:36'),
(7, 12, 'Savings', '1000.00', '0.00', '2025-04-30', '333.33', 'active', '2025-01-18 07:17:21', '2025-01-18 07:17:35'),
(9, 21, 'Chew', '5000.00', '0.00', '2025-10-31', '625.00', 'active', '2025-02-13 04:36:17', '2025-02-13 04:36:17');

CREATE TABLE `savings_transactions` (
  `id` int NOT NULL,
  `savings_account_id` int NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `type` enum('deposit','withdrawal','transfer_in','transfer_out') NOT NULL,
  `payment_method` enum('cash','bank_transfer','salary_deduction','fpx','card','ewallet') NOT NULL,
  `reference_no` varchar(50) DEFAULT NULL,
  `description` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `sender_account_number` varchar(50) DEFAULT NULL,
  `recipient_account_number` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

INSERT INTO `savings_transactions` (`id`, `savings_account_id`, `amount`, `type`, `payment_method`, `reference_no`, `description`, `created_at`, `sender_account_number`, `recipient_account_number`) VALUES
(22, 28, '344.00', 'deposit', 'fpx', 'DEP17370186495067', 'Deposit ke akaun simpanan', '2025-01-16 09:10:49', NULL, NULL),
(23, 28, '300.00', 'deposit', 'fpx', 'DEP17370187607513', 'Deposit ke akaun simpanan', '2025-01-16 09:12:40', NULL, NULL),
(24, 28, '30.00', 'deposit', 'fpx', 'DEP17370189325980', 'Deposit ke akaun simpanan', '2025-01-16 09:15:32', NULL, NULL),
(25, 28, '10.00', 'deposit', 'fpx', 'DEP17370191296296', 'Deposit ke akaun simpanan', '2025-01-16 09:18:49', NULL, NULL),
(26, 28, '12.00', 'deposit', 'fpx', 'DEP17370295784453', 'Deposit ke akaun simpanan', '2025-01-16 12:12:58', NULL, NULL),
(35, 28, '10.00', 'transfer_out', 'fpx', 'TRF20250116124724226', 'Pembayaran ', '2025-01-16 12:47:24', 'SAV-000009-8692', 'SAV-000012-5441'),
(36, 29, '10.00', 'transfer_in', 'fpx', 'TRF20250116124724226', 'Pembayaran ', '2025-01-16 12:47:24', 'SAV-000009-8692', 'SAV-000012-5441'),
(37, 29, '800.00', 'deposit', 'fpx', 'DEP17371857333743', 'Deposit ke akaun simpanan', '2025-01-18 07:35:33', NULL, NULL),
(68, 30, '841.63', 'transfer_out', 'card', 'TRX202404194732', 'Pengeluaran', '2024-04-18 17:21:00', 'SAV-000013-6893', 'SAV-000013-6893'),
(69, 30, '654.37', 'transfer_out', 'ewallet', 'TRX202404180021', 'Pindahan masuk', '2024-04-18 07:59:00', 'SAV-000013-6893', 'SAV-000013-6893'),
(70, 30, '476.78', 'deposit', 'fpx', 'TRX202404157113', 'Pindahan keluar', '2024-04-15 04:46:00', 'SAV-000012-5441', 'SAV-938561-5335'),
(71, 30, '765.03', 'withdrawal', 'fpx', 'TRX202407229758', 'Pengeluaran', '2024-07-22 15:45:00', 'SAV-668230-8738', 'SAV-000013-6893'),
(72, 30, '922.15', 'transfer_out', 'fpx', 'TRX202410308483', 'Pindahan keluar', '2024-10-29 22:05:00', 'SAV-000013-6893', 'SAV-000013-6893'),
(73, 30, '527.82', 'transfer_out', 'fpx', 'TRX202401036522', 'Pengeluaran', '2024-01-03 09:36:00', 'SAV-000012-5441', 'SAV-000012-5441'),
(74, 30, '417.82', 'transfer_in', 'fpx', 'TRX202410288728', 'Pindahan keluar', '2024-10-28 05:22:00', 'SAV-000013-6893', 'SAV-660182-4643'),
(75, 30, '972.54', 'withdrawal', 'card', 'TRX202404293602', 'Pindahan keluar', '2024-04-28 16:36:00', 'SAV-000009-8692', 'SAV-000013-6893'),
(76, 30, '775.78', 'transfer_in', 'ewallet', 'TRX202411159769', 'Pindahan masuk', '2024-11-14 17:31:00', 'SAV-236777-0050', 'SAV-000013-6893'),
(77, 30, '211.57', 'transfer_in', 'ewallet', 'TRX202401188539', 'Pengeluaran', '2024-01-18 14:44:00', 'SAV-000009-8692', 'SAV-575650-6395'),
(78, 30, '338.53', 'deposit', 'fpx', 'TRX202411118965', 'Simpanan bulanan', '2024-11-10 21:32:00', 'SAV-000013-6893', 'SAV-000012-5441'),
(79, 30, '992.81', 'transfer_in', 'fpx', 'TRX202401152827', 'Pengeluaran', '2024-01-15 15:49:00', 'SAV-000013-6893', 'SAV-000013-6893'),
(80, 30, '610.21', 'deposit', 'fpx', 'TRX202411100788', 'Simpanan bulanan', '2024-11-10 13:23:00', 'SAV-000009-8692', 'SAV-000013-6893'),
(81, 30, '828.01', 'withdrawal', 'ewallet', 'TRX202404230841', 'Pengeluaran', '2024-04-23 10:37:00', 'SAV-000009-8692', 'SAV-000013-6893'),
(82, 30, '777.83', 'deposit', 'card', 'TRX202407318434', 'Pindahan keluar', '2024-07-31 07:47:00', 'SAV-000012-5441', 'SAV-000013-6893'),
(83, 30, '332.08', 'deposit', 'fpx', 'TRX202404218793', 'Pengeluaran', '2024-04-21 04:20:00', 'SAV-000013-6893', 'SAV-000012-5441'),
(84, 30, '724.05', 'transfer_out', 'card', 'TRX202407290218', 'Simpanan bulanan', '2024-07-29 00:35:00', 'SAV-000012-5441', 'SAV-000012-5441'),
(85, 30, '532.08', 'withdrawal', 'ewallet', 'TRX202411066049', 'Pindahan masuk', '2024-11-05 23:41:00', 'SAV-000013-6893', 'SAV-000012-5441'),
(86, 30, '462.83', 'withdrawal', 'card', 'TRX202401290736', 'Simpanan bulanan', '2024-01-28 23:09:00', 'SAV-000009-8692', 'SAV-000012-5441'),
(87, 30, '536.49', 'withdrawal', 'fpx', 'TRX202405083245', 'Pengeluaran', '2024-05-07 23:08:00', 'SAV-000012-5441', 'SAV-000013-6893'),
(88, 30, '286.46', 'withdrawal', 'ewallet', 'TRX202401278996', 'Pengeluaran', '2024-01-27 09:15:00', 'SAV-000013-6893', 'SAV-000012-5441'),
(89, 30, '99.05', 'transfer_in', 'card', 'TRX202408146237', 'Pindahan keluar', '2024-08-13 20:30:00', 'SAV-000012-5441', 'SAV-000013-6893'),
(90, 30, '88.02', 'transfer_out', 'ewallet', 'TRX202408138502', 'Pindahan masuk', '2024-08-12 16:56:00', 'SAV-000013-6893', 'SAV-741962-9962'),
(91, 30, '179.97', 'transfer_in', 'card', 'TRX202408126251', 'Pindahan masuk', '2024-08-12 08:19:00', 'SAV-000013-6893', 'SAV-523964-5305'),
(92, 30, '822.82', 'transfer_out', 'ewallet', 'TRX202411209326', 'Pindahan masuk', '2024-11-19 23:39:00', 'SAV-936615-2903', 'SAV-000012-5441'),
(93, 30, '440.20', 'transfer_out', 'fpx', 'TRX202408093257', 'Simpanan bulanan', '2024-08-08 21:58:00', 'SAV-000013-6893', 'SAV-000009-8692'),
(94, 30, '563.67', 'deposit', 'fpx', 'TRX202411170595', 'Simpanan bulanan', '2024-11-17 12:09:00', 'SAV-000009-8692', 'SAV-260114-7910'),
(95, 30, '527.30', 'transfer_out', 'card', 'TRX202401211702', 'Pindahan masuk', '2024-01-21 00:03:00', 'SAV-000013-6893', 'SAV-000013-6893'),
(96, 30, '847.48', 'transfer_out', 'fpx', 'TRX202404309727', 'Simpanan bulanan', '2024-04-30 08:09:00', 'SAV-000013-6893', 'SAV-000013-6893'),
(97, 30, '149.55', 'transfer_out', 'card', 'TRX202405197687', 'Pindahan keluar', '2024-05-19 04:40:00', 'SAV-000009-8692', 'SAV-000013-6893'),
(98, 30, '196.95', 'transfer_in', 'fpx', 'TRX202408279802', 'Simpanan bulanan', '2024-08-27 15:15:00', 'SAV-000009-8692', 'SAV-000013-6893'),
(99, 30, '184.08', 'transfer_in', 'fpx', 'TRX202408261372', 'Pengeluaran', '2024-08-25 16:10:00', 'SAV-932862-5917', 'SAV-000009-8692'),
(100, 30, '890.54', 'transfer_out', 'ewallet', 'TRX202402070828', 'Pengeluaran', '2024-02-06 21:44:00', 'SAV-000012-5441', 'SAV-000009-8692'),
(101, 30, '892.38', 'deposit', 'card', 'TRX202408243164', 'Pengeluaran', '2024-08-23 19:22:00', 'SAV-000013-6893', 'SAV-000013-6893'),
(102, 30, '574.90', 'withdrawal', 'ewallet', 'TRX202408233044', 'Pengeluaran', '2024-08-23 02:26:00', 'SAV-717082-0605', 'SAV-000012-5441'),
(103, 30, '103.38', 'transfer_in', 'ewallet', 'TRX202408229841', 'Pindahan keluar', '2024-08-21 17:13:00', 'SAV-000009-8692', 'SAV-000009-8692'),
(104, 30, '538.25', 'withdrawal', 'ewallet', 'TRX202402037662', 'Simpanan bulanan', '2024-02-03 13:25:00', 'SAV-940545-1665', 'SAV-000012-5441'),
(105, 30, '73.86', 'transfer_out', 'ewallet', 'TRX202408210174', 'Pindahan masuk', '2024-08-21 05:42:00', 'SAV-000009-8692', 'SAV-000013-6893'),
(106, 30, '764.34', 'transfer_in', 'card', 'TRX202411299991', 'Pengeluaran', '2024-11-29 15:38:00', 'SAV-000012-5441', 'SAV-030100-4686'),
(107, 30, '865.92', 'transfer_in', 'fpx', 'TRX202402028961', 'Simpanan bulanan', '2024-02-01 21:30:00', 'SAV-000009-8692', 'SAV-000013-6893'),
(108, 30, '267.22', 'deposit', 'card', 'TRX202408191035', 'Simpanan bulanan', '2024-08-19 09:06:00', 'SAV-000009-8692', 'SAV-000013-6893'),
(109, 30, '343.48', 'deposit', 'card', 'TRX202405296971', 'Pindahan masuk', '2024-05-28 23:26:00', 'SAV-000009-8692', 'SAV-000013-6893'),
(110, 30, '770.51', 'deposit', 'card', 'TRX202405275409', 'Pindahan keluar', '2024-05-27 08:48:00', 'SAV-000012-5441', 'SAV-000013-6893'),
(111, 30, '906.79', 'deposit', 'card', 'TRX202412133169', 'Pengeluaran', '2024-12-12 16:00:00', 'SAV-000012-5441', 'SAV-000013-6893'),
(112, 30, '323.79', 'withdrawal', 'ewallet', 'TRX202405258065', 'Pindahan keluar', '2024-05-25 01:45:00', 'SAV-000013-6893', 'SAV-000013-6893'),
(113, 30, '828.26', 'transfer_out', 'card', 'TRX202412114359', 'Pindahan masuk', '2024-12-11 01:45:00', 'SAV-000013-6893', 'SAV-000013-6893'),
(114, 30, '845.01', 'deposit', 'ewallet', 'TRX202402144640', 'Pengeluaran', '2024-02-14 15:32:00', 'SAV-000013-6893', 'SAV-000013-6893'),
(115, 30, '595.00', 'transfer_in', 'card', 'TRX202412099615', 'Simpanan bulanan', '2024-12-08 23:26:00', 'SAV-000009-8692', 'SAV-000013-6893'),
(116, 30, '447.46', 'transfer_out', 'card', 'TRX202408305492', 'Simpanan bulanan', '2024-08-30 05:38:00', 'SAV-000013-6893', 'SAV-000013-6893'),
(117, 30, '756.23', 'withdrawal', 'fpx', 'TRX202402119246', 'Simpanan bulanan', '2024-02-10 18:54:00', 'SAV-000012-5441', 'SAV-000013-6893'),
(131, 30, '1855.87', 'deposit', 'fpx', 'TRX202404199046', 'Simpanan bulanan', '2024-04-19 10:58:00', 'SAV-376551-4778', 'SAV-000013-6893'),
(132, 30, '1797.84', 'transfer_in', 'fpx', 'TRX202407280511', 'Pindahan masuk', '2024-07-27 17:43:00', 'SAV-105481-5581', 'SAV-000013-6893'),
(133, 30, '893.17', 'deposit', 'ewallet', 'TRX202404181495', 'Pindahan masuk', '2024-04-18 15:53:00', 'SAV-000012-5441', 'SAV-000013-6893'),
(134, 30, '923.57', 'transfer_in', 'card', 'TRX202407263620', 'Simpanan bulanan', '2024-07-26 13:20:00', 'SAV-000009-8692', 'SAV-000013-6893'),
(135, 30, '1844.98', 'deposit', 'card', 'TRX202411025580', 'Simpanan bulanan', '2024-11-01 20:26:00', 'SAV-781857-7505', 'SAV-000013-6893'),
(136, 30, '1763.31', 'transfer_in', 'card', 'TRX202411011301', 'Pindahan masuk', '2024-11-01 12:40:00', 'SAV-674714-6276', 'SAV-000013-6893'),
(137, 30, '1531.92', 'deposit', 'card', 'TRX202401058182', 'Pindahan masuk', '2024-01-05 08:53:00', 'SAV-000012-5441', 'SAV-000013-6893'),
(138, 30, '1780.81', 'deposit', 'card', 'TRX202404144465', 'Pindahan masuk', '2024-04-14 08:40:00', 'SAV-000009-8692', 'SAV-000013-6893'),
(139, 30, '1161.69', 'transfer_in', 'fpx', 'TRX202401035863', 'Pindahan masuk', '2024-01-03 14:59:00', 'SAV-000009-8692', 'SAV-000013-6893'),
(140, 30, '720.53', 'deposit', 'ewallet', 'TRX202404127687', 'Pindahan masuk', '2024-04-12 05:32:00', 'SAV-118233-9890', 'SAV-000013-6893'),
(141, 30, '1801.68', 'transfer_in', 'card', 'TRX202401024637', 'Pindahan masuk', '2024-01-01 22:40:00', 'SAV-302807-4363', 'SAV-000013-6893'),
(142, 30, '587.97', 'deposit', 'fpx', 'TRX202404115159', 'Simpanan bulanan', '2024-04-11 05:41:00', 'SAV-506722-5648', 'SAV-000013-6893'),
(143, 30, '1462.91', 'transfer_in', 'ewallet', 'TRX202401011335', 'Simpanan bulanan', '2024-01-01 09:21:00', 'SAV-704970-8370', 'SAV-000013-6893'),
(144, 30, '1763.76', 'deposit', 'card', 'TRX202404103660', 'Simpanan bulanan', '2024-04-10 14:32:00', 'SAV-000012-5441', 'SAV-000013-6893'),
(145, 30, '1432.05', 'deposit', 'ewallet', 'TRX202407191966', 'Simpanan bulanan', '2024-07-19 07:57:00', 'SAV-939041-5215', 'SAV-000013-6893'),
(146, 30, '1523.80', 'transfer_in', 'ewallet', 'TRX202411148076', 'Simpanan bulanan', '2024-11-13 16:11:00', 'SAV-143036-7973', 'SAV-000013-6893'),
(147, 30, '1104.47', 'deposit', 'ewallet', 'TRX202411112488', 'Pindahan masuk', '2024-11-11 14:02:00', 'SAV-947573-2781', 'SAV-000013-6893'),
(148, 30, '583.61', 'transfer_in', 'card', 'TRX202404236094', 'Pindahan masuk', '2024-04-22 21:15:00', 'SAV-000012-5441', 'SAV-000013-6893'),
(149, 30, '1881.00', 'deposit', 'ewallet', 'TRX202411095737', 'Pindahan masuk', '2024-11-09 14:02:00', 'SAV-971692-6882', 'SAV-000013-6893'),
(150, 30, '1356.20', 'deposit', 'ewallet', 'TRX202407314544', 'Simpanan bulanan', '2024-07-31 11:56:00', 'SAV-000009-8692', 'SAV-000013-6893'),
(162, 30, '1068.90', 'transfer_out', 'fpx', 'TRX202501072447', 'Pindahan keluar', '2025-01-21 16:54:00', 'SAV-000013-6893', 'SAV-000013-6893'),
(163, 30, '272.75', 'deposit', 'ewallet', 'TRX202501237034', 'Pindahan masuk', '2025-01-22 13:48:24', 'SAV-000012-5441', 'SAV-000013-6893'),
(165, 33, '500.00', 'deposit', 'fpx', 'DEP202501301234', 'Deposit awal', '2025-02-11 14:17:24', NULL, NULL),
(166, 34, '750.00', 'deposit', 'fpx', 'DEP202501302345', 'Deposit awal', '2025-02-11 14:17:24', NULL, NULL),
(167, 35, '1000.00', 'deposit', 'fpx', 'DEP202501303456', 'Deposit awal', '2025-02-11 14:17:24', NULL, NULL),
(168, 33, '500.00', 'deposit', 'fpx', 'DEP17394145916377', 'Deposit ke akaun simpanan', '2025-02-13 02:43:11', NULL, NULL),
(169, 33, '10.00', 'transfer_out', 'fpx', 'TRF20250213041145102', 'Transfer keluar ke SAV-000023-6543: Pembayaran ', '2025-02-13 04:11:45', 'SAV-000021-4321', 'SAV-000023-6543'),
(170, 35, '10.00', 'transfer_in', 'fpx', 'TRF20250213041145102', 'Transfer masuk dari SAV-000021-4321: Pembayaran ', '2025-02-13 04:11:45', 'SAV-000021-4321', 'SAV-000023-6543'),
(171, 33, '10.00', 'transfer_out', 'fpx', 'TRF20250213041325985', 'Transfer keluar ke SAV-000023-6543: Pembayaran ', '2025-02-13 04:13:25', 'SAV-000021-4321', 'SAV-000023-6543'),
(172, 35, '10.00', 'transfer_in', 'fpx', 'TRF20250213041325985', 'Transfer masuk dari SAV-000021-4321: Pembayaran ', '2025-02-13 04:13:25', 'SAV-000021-4321', 'SAV-000023-6543'),
(173, 33, '10.00', 'transfer_out', 'fpx', 'TRF20250213041534693', 'Transfer keluar ke SAV-000023-6543: Pembayaran ', '2025-02-13 04:15:34', 'SAV-000021-4321', 'SAV-000023-6543'),
(174, 35, '10.00', 'transfer_in', 'fpx', 'TRF20250213041534693', 'Transfer masuk dari SAV-000021-4321: Pembayaran ', '2025-02-13 04:15:34', 'SAV-000021-4321', 'SAV-000023-6543'),
(175, 33, '10.00', 'transfer_out', 'fpx', 'TRF20250213041705296', 'Transfer keluar ke SAV-000023-6543: Pembayaran ', '2025-02-13 04:17:05', 'SAV-000021-4321', 'SAV-000023-6543'),
(176, 35, '10.00', 'transfer_in', 'fpx', 'TRF20250213041705296', 'Transfer masuk dari SAV-000021-4321: Pembayaran ', '2025-02-13 04:17:05', 'SAV-000021-4321', 'SAV-000023-6543'),
(177, 35, '10.00', 'transfer_out', 'fpx', 'TRF20250213041959388', 'Transfer keluar ke SAV-000021-4321: Pembayaran ', '2025-02-13 04:19:59', 'SAV-000023-6543', 'SAV-000021-4321'),
(178, 33, '10.00', 'transfer_in', 'fpx', 'TRF20250213041959388', 'Transfer masuk dari SAV-000023-6543: Pembayaran ', '2025-02-13 04:19:59', 'SAV-000023-6543', 'SAV-000021-4321'),
(179, 33, '10.00', 'transfer_out', 'bank_transfer', 'TRF20250213042744858', 'Transfer ke maybank - 234567 (Chew cx): Pembayaran bak', '2025-02-13 04:27:44', 'SAV-000021-4321', '234567');

CREATE TABLE `statements` (
  `id` int NOT NULL,
  `member_id` int NOT NULL,
  `account_id` int NOT NULL,
  `reference_no` varchar(20) CHARACTER SET utf8mb4 NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `status` enum('generated','downloaded') CHARACTER SET utf8mb4 DEFAULT 'generated',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci;

INSERT INTO `statements` (`id`, `member_id`, `account_id`, `reference_no`, `start_date`, `end_date`, `status`, `created_at`) VALUES
(1, 12, 29, 'STM202501182402', '2024-12-18', '2025-01-18', 'generated', '2025-01-18 14:44:27');

CREATE TABLE `user_notifications` (
  `id` int NOT NULL,
  `member_id` int NOT NULL,
  `email_enabled` tinyint(1) DEFAULT '0',
  `email` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `user_notifications` (`id`, `member_id`, `email_enabled`, `email`, `created_at`, `updated_at`) VALUES
(3, 12, 1, 'kada.ecopioneer@gmail.com', '2025-01-22 21:18:53', '2025-01-22 21:18:53'),
(4, 13, 1, 'kada.ecopioneer@gmail.com', '2025-01-22 21:47:11', '2025-01-22 21:48:45'),
(5, 21, 0, NULL, '2025-02-12 18:27:20', '2025-02-12 18:27:20');

ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

ALTER TABLE `annual_report`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_year` (`year`),
  ADD KEY `uploaded_by` (`uploaded_by`);

ALTER TABLE `directors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `unique_director_id` (`director_id`);

ALTER TABLE `interest_rates`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `loans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `member_id` (`member_id`),
  ADD KEY `approved_by` (`approved_by`);

ALTER TABLE `loan_guarantors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `loan_id` (`loan_id`);

ALTER TABLE `loan_payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `loan_id` (`loan_id`);

ALTER TABLE `members`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ic_no` (`ic_no`),
  ADD UNIQUE KEY `member_id` (`member_id`);

ALTER TABLE `member_fees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `member_id` (`member_id`);

ALTER TABLE `pendingloans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `member_id` (`member_id`);

ALTER TABLE `pendingmember`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ic_no` (`ic_no`),
  ADD UNIQUE KEY `unique_reference_no` (`reference_no`);

ALTER TABLE `reactivation_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `member_id` (`member_id`);

ALTER TABLE `recurring_payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `loan_id` (`loan_id`);

ALTER TABLE `rejectedloans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `member_id` (`member_id`),
  ADD KEY `rejectedloans_ibfk_2` (`rejected_by`);

ALTER TABLE `rejectedmember`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ic_no` (`ic_no`);

ALTER TABLE `resignation_reasons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `member_id` (`member_id`);

ALTER TABLE `savings_accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_account_number` (`account_number`),
  ADD KEY `fk_savings_admin` (`member_id`);

ALTER TABLE `savings_goals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `member_id` (`member_id`);

ALTER TABLE `savings_transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `savings_account_id` (`savings_account_id`);

ALTER TABLE `statements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `member_id` (`member_id`),
  ADD KEY `account_id` (`account_id`);

ALTER TABLE `user_notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `member_id` (`member_id`);

ALTER TABLE `admins`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

ALTER TABLE `annual_report`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE `directors`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

ALTER TABLE `interest_rates`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `loans`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

ALTER TABLE `loan_guarantors`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

ALTER TABLE `loan_payments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

ALTER TABLE `members`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

ALTER TABLE `member_fees`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `pendingloans`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

ALTER TABLE `pendingmember`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

ALTER TABLE `reactivation_requests`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `recurring_payments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

ALTER TABLE `rejectedloans`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `rejectedmember`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

ALTER TABLE `resignation_reasons`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

ALTER TABLE `savings_accounts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

ALTER TABLE `savings_goals`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

ALTER TABLE `savings_transactions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=180;

ALTER TABLE `statements`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `user_notifications`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

ALTER TABLE `annual_report`
  ADD CONSTRAINT `annual_report_ibfk_1` FOREIGN KEY (`uploaded_by`) REFERENCES `admins` (`id`);

ALTER TABLE `loans`
  ADD CONSTRAINT `loans_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`),
  ADD CONSTRAINT `loans_ibfk_2` FOREIGN KEY (`approved_by`) REFERENCES `directors` (`id`);

ALTER TABLE `loan_guarantors`
  ADD CONSTRAINT `loan_guarantors_ibfk_1` FOREIGN KEY (`loan_id`) REFERENCES `pendingloans` (`id`);

ALTER TABLE `loan_payments`
  ADD CONSTRAINT `loan_payments_ibfk_1` FOREIGN KEY (`loan_id`) REFERENCES `loans` (`id`) ON DELETE CASCADE;

ALTER TABLE `member_fees`
  ADD CONSTRAINT `member_fees_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`);

ALTER TABLE `pendingloans`
  ADD CONSTRAINT `pendingloans_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`);

ALTER TABLE `reactivation_requests`
  ADD CONSTRAINT `reactivation_requests_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`);

ALTER TABLE `recurring_payments`
  ADD CONSTRAINT `recurring_payments_loan_fk` FOREIGN KEY (`loan_id`) REFERENCES `loans` (`id`) ON DELETE CASCADE;

ALTER TABLE `resignation_reasons`
  ADD CONSTRAINT `resignation_reasons_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`);

ALTER TABLE `savings_accounts`
  ADD CONSTRAINT `fk_member_savings` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


