-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2024 at 02:05 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notes`
--

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_on` date DEFAULT NULL,
  `updated_at` time DEFAULT NULL,
  `updated_on` date DEFAULT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `title`, `description`, `created_at`, `created_on`, `updated_at`, `updated_on`, `status`) VALUES
(1, 'Welcome!', 'Thank you visiting this notes app. You can create, edit, view detailed infor or delete your note. ', '2024-12-19 17:08:27', '2024-12-19', '18:26:23', '2024-12-19', '1'),
(2, 'About me', 'I\'m Himanshu Sharan, Graduate Software Developer @ Growth Grids (Jaipur). I have 2 years of total experience including 1 year of hands on experience in Node.js, MySQL, Express.js, MongoDB, GitHub,\nsequelize, mongoose multer and many more. I am looking for new opportunies and a dynamic team to join.\n\n\nThank you,\nHimanshu Sharan,\n+91 9508231713,\nsharanhemant7@gmail.com', '2024-12-19 17:13:40', '2024-12-19', '17:44:06', '2024-12-19', '1'),
(3, 'My recent tasks at Growth Grids', 'Here is a list of tasks which I was assigned in my current role.\n\nAPI Development and Maintenance\n- Designed and implemented APIs for managing various candidate details in CV Manager, including educational, project, training, address, membership, and work experience information.\n- Developed APIs for job creation, job listing, and added advanced filtering options for job searches.\n- Created APIs to handle profile settings, email notifications, prefix settings, and listing industries, sectors, phases, and keywords.\n\nPDF and Document Management\n- Built APIs for merging, splitting, and compressing PDFs, with features like embedding custom headers, footers, and watermarks.\n- Enhanced functionality to ensure consistency and compression in split PDFs.\n- Created APIs for managing checklist documents, including nested soft deletions and serial-wise listing for documents.\n\nE-commerce and User Experience\n- Improved shopping cart functionality to prevent users from exceeding available stock.\n- Developed APIs to manage coupons, offers, and order history, including first-order coupons and dynamic home sections for better personalization.\n- Resolved issues in user-login and user-register APIs, enabling seamless user experiences.\n\nEmail Services and Verification\n- Implemented email verification APIs, integrated OTP-based verification, and ensured email verification status was reflected in user profiles.\n- Developed and maintained email templates and notification systems across various projects.\n\nData Management and Reporting\n- Created APIs to generate Excel reports for product listings and Facebook Business integration.\n- Automated processes for inserting data into MongoDB collections based on directory content and filenames.\n\nBug Fixing and Optimization\n- Identified and resolved critical issues, including proxy errors and non-functional APIs, across multiple projects.\n- Optimized API efficiency by removing unnecessary files and streamlining database operations.\n\nProject-Specific Contributions\n- Kairaus: Worked on reward coupons, social login (including Facebook), and enhanced product coupon APIs.\n- Ideal Coffee: Added features like product specialties, transparent images, and email template management.\n- Bid Grid: Developed comprehensive checklist and wishlist management systems, tender search functionality, and efficient proposal generation APIs.\n- Docs Grid: Addressed folder upload API errors and implemented advanced document handling features.\n\nCollaboration and Mentorship\n- Collaborated on resolving bugs in a school management project and assigned tasks to team members.\n- Created an Entity Relationship Diagram to enhance team understanding of database structure.\n', '2024-12-19 17:16:53', '2024-12-19', '17:44:02', '2024-12-19', '1'),
(4, 'Hobbies and Interests', 'Typing:- I come from a non-IT background, but my passion for technology has driven me to pursue this path. Typing has been a key skill in my journey, and I can type up to 141 words per minute, as recorded on MonkeyType. I hold multiple certifications and have a proven track record with an average typing speed of 80-90 words per minute, demonstrating my efficiency and dedication.\n\nCoding:- whenever I explore a topic I try to dive deep as much as possible. I love to know the root of the topic I know so that when working/teaching/explaining to someone, I can be fluent, fast and accurate as well.\n\nPlaying cricket :- I have been playing cricket since childhood, I have won many matches, been selected as captain sometimes. ', '2024-12-19 17:35:07', '2024-12-19', '17:43:32', '2024-12-19', '1'),
(5, 'Strengths', 'Discipline :-\n I have a proven track record of never being late to the office, not even by a single minute, showcasing my commitment to professionalism.\n I am highly disciplined and maintain a strong work ethic, ensuring I adhere to all rules and standards without fail.\n I consistently plan and structure my tasks, ensuring a systematic approach to work that reduces errors and improves efficiency.\n\nPunctuality\n I have never delivered a project late, consistently meeting deadlines while maintaining high quality.\n', '2024-12-19 17:39:49', '2024-12-19', '17:43:53', '2024-12-19', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
