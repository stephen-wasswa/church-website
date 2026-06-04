-- Kasenge Miracle Centre Church — Alimunze
-- Database Setup Script
-- Student: Wasswa Makubuya Stephen | VU-CSF-2603-0849

-- Step 1: Create the database
CREATE DATABASE IF NOT EXISTS kmc_church;
USE kmc_church;

-- TABLE 1: contact_messages
-- Stores messages sent from the "I'm New Here" contact form
CREATE TABLE IF NOT EXISTS contact_messages (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  first_name    VARCHAR(100)  NOT NULL,
  last_name     VARCHAR(100),
  email         VARCHAR(150)  NOT NULL,
  phone         VARCHAR(30),
  visit_date    DATE,
  message       TEXT,
  submitted_at  DATETIME      DEFAULT CURRENT_TIMESTAMP
);

-- TABLE 2: prayer_requests
-- Stores prayer requests sent from the Prayer modal
CREATE TABLE IF NOT EXISTS prayer_requests (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  full_name     VARCHAR(150)  NOT NULL,
  request       TEXT          NOT NULL,
  submitted_at  DATETIME      DEFAULT CURRENT_TIMESTAMP
);

-- TABLE 3: new_visitors
-- Stores visitor sign-up information
CREATE TABLE IF NOT EXISTS new_visitors (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  full_name     VARCHAR(150)  NOT NULL,
  email         VARCHAR(150),
  phone         VARCHAR(30),
  how_heard     VARCHAR(100),
  submitted_at  DATETIME      DEFAULT CURRENT_TIMESTAMP
);

-- TABLE 4: admin_users
-- Stores admin login for the dashboard
CREATE TABLE IF NOT EXISTS admin_users (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  username      VARCHAR(50)   NOT NULL UNIQUE,
  password_hash VARCHAR(255)  NOT NULL
);

-- Insert default admin account
-- Username: admin | Password: kmc2024
INSERT INTO admin_users (username, password_hash)
VALUES ('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');

