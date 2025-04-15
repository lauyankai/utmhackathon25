<?php
namespace App\Models;

use App\Core\BaseModel;
use PDO;

class MemberFee extends BaseModel
{
    public function create($member_id)
    {
        try {
            $sql = "INSERT INTO member_fees (
                member_id, 
                registration_fee,
                share_capital,
                membership_fee,
                welfare_fund,
                payment_status
            ) VALUES (
                :member_id,
                20.00,  // Default registration fee
                100.00, // Default share capital
                10.00,  // Default membership fee
                10.00,  // Default welfare fund
                'pending'
            )";

            $stmt = $this->getConnection()->prepare($sql);
            $stmt->execute([':member_id' => $member_id]);
            
            return $this->getConnection()->lastInsertId();
        } catch (\PDOException $e) {
            error_log('Database Error: ' . $e->getMessage());
            throw new \Exception('Failed to create member fees record');
        }
    }

    public function getByMemberId($member_id)
    {
        try {
            $sql = "SELECT * FROM member_fees WHERE member_id = ?";
            $stmt = $this->getConnection()->prepare($sql);
            $stmt->execute([$member_id]);
            return $stmt->fetch(PDO::FETCH_ASSOC);
        } catch (\PDOException $e) {
            error_log('Database Error: ' . $e->getMessage());
            throw new \Exception('Failed to fetch member fees');
        }
    }

    public function updatePaymentStatus($member_id, $status, $payment_method = null, $payment_reference = null)
    {
        try {
            $sql = "UPDATE member_fees 
                   SET payment_status = :status,
                       payment_method = :payment_method,
                       payment_reference = :payment_reference,
                       paid_at = CASE 
                           WHEN :status = 'completed' THEN CURRENT_TIMESTAMP
                           ELSE paid_at
                       END
                   WHERE member_id = :member_id";

            $stmt = $this->getConnection()->prepare($sql);
            return $stmt->execute([
                ':status' => $status,
                ':payment_method' => $payment_method,
                ':payment_reference' => $payment_reference,
                ':member_id' => $member_id
            ]);
        } catch (\PDOException $e) {
            error_log('Database Error: ' . $e->getMessage());
            throw new \Exception('Failed to update payment status');
        }
    }

    public function getTotalFees($member_id)
    {
        try {
            $sql = "SELECT 
                    registration_fee + share_capital + membership_fee + welfare_fund 
                    as total_fees 
                   FROM member_fees 
                   WHERE member_id = ?";
            $stmt = $this->getConnection()->prepare($sql);
            $stmt->execute([$member_id]);
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            return $result ? $result['total_fees'] : 0;
        } catch (\PDOException $e) {
            error_log('Database Error: ' . $e->getMessage());
            throw new \Exception('Failed to calculate total fees');
        }
    }
} 