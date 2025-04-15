<?php
namespace App\Core;

use PDO;
use PDOException;

class Database
{
    private $host = 'localhost';
    private $dbname = 'kada_mvc';
    private $user = 'kadakada';
    private $pass = 'Kadakada,12345';
    private $pdo;

    public function connect()
    {
        if ($this->pdo === null) {
            try {
                $dsn = "mysql:host={$this->host};dbname={$this->dbname};";
                error_log("Attempting to connect to database with DSN: $dsn");
                $this->pdo = new PDO($dsn, $this->user, $this->pass, [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
                ]);
				$this->pdo->exec("SET NAMES utf8mb4 COLLATE utf8mb4_general_ci");
                error_log("Database connection successful");
            } catch (PDOException $e) {
                error_log("Database connection error: " . $e->getMessage());
                die("Database connection error: " . $e->getMessage());
            }
        }
        return $this->pdo;
    }
}