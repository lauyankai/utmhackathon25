<?php
namespace App\Controllers;
use App\Core\BaseController;
use App\Models\Guest;
use App\Core\Database;
use PDOException;
use Exception;

class GuestController extends BaseController
{
    private $guest;
    
    public function __construct()
    {
        $this->guest = new Guest();
    }

    public function create()
    {
        $this->view('guest/create');
    }
    
    public function store()
    {
        try {
            $createdGuest = $this->guest->create($_POST);
            
            if ($createdGuest) {
                // Remove success message from session since we'll show it directly in success view
                $this->view('guest/success', [
                    'reference_no' => $createdGuest['reference_no'],
                    'success_message' => "Pendaftaran berjaya! Sila semak emel anda untuk maklumat lanjut."
                ]);
                exit;
            }
        } catch (PDOException $e) {
            $_SESSION['error'] = "Ralat semasa pendaftaran: " . $e->getMessage();
            header('Location: /guest/create');
            exit;
        }
    }

    public function checkStatusPage()
    {
        $this->view('guest/check-status');
    }

    public function checkStatus()
    {
        // Start output buffering
        ob_start();
        
        try {
            // Get the raw POST data
            $rawData = file_get_contents('php://input');
            error_log("Raw request data: " . $rawData);
            
            // Parse JSON manually if needed
            if (empty($rawData)) {
                throw new \Exception("No data received");
            }
            
            // Use global namespace for json functions
            $data = \json_decode($rawData, true);
            if ($data === null && \json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception("Invalid JSON format");
            }
            
            error_log("Processed request data: " . print_r($data, true));
            
            // Validate the data
            if (empty($data)) {
                throw new \Exception("Empty data received");
            }
            
            // Check status based on provided data
            $status = null;
            if (!empty($data['reference_no'])) {
                $status = $this->guest->checkStatusByReference($data['reference_no']);
                error_log("Status from reference check: " . $status);
            } else if (!empty($data['name']) && !empty($data['ic_no'])) {
                $status = $this->guest->checkStatusByPersonal($data['name'], $data['ic_no']);
                error_log("Status from personal check: " . $status);
            } else {
                throw new \Exception("Missing required fields");
            }
            
            // Clear any buffered output
            ob_clean();
            
            // Set headers
            header('Content-Type: application/json');
            header('Cache-Control: no-cache, must-revalidate');
            
            // Prepare and send response
            $response = array(
                'success' => true,
                'status' => $status,
                'message' => $this->getStatusMessage($status)
            );
            
            echo str_replace('\\/', '/', \json_encode($response));
            
        } catch (\Exception $e) {
            // Clear any buffered output
            ob_clean();
            
            // Set headers
            header('Content-Type: application/json');
            header('Cache-Control: no-cache, must-revalidate');
            
            error_log("Error in checkStatus: " . $e->getMessage());
            
            $response = array(
                'success' => false,
                'error' => $e->getMessage()
            );
            
            echo str_replace('\\/', '/', \json_encode($response));
        }
        
        exit;
    }

    private function getStatusMessage($status) {
        switch($status) {
            case 'Pending':
                return 'Permohonan anda masih dalam proses semakan. Sila tunggu makluman selanjutnya.';
            case 'Lulus':
            case 'Active':
                return 'Tahniah! Permohonan anda telah diluluskan. Anda boleh log masuk sebagai ahli menggunakan nombor kad pengenalan anda.';
            case 'Tolak':
            case 'Inactive':
                return 'Harap maaf, permohonan anda tidak berjaya. Anda boleh mendaftar semula sebagai ahli.';
            case 'not_found':
                return 'Tiada permohonan dijumpai dengan nama ini.';
            default:
                return 'Status tidak diketahui.';
        }
    }
}