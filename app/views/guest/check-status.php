<?php 
    $title = 'Semak Status Permohonan';
    require_once '../app/views/layouts/header.php';
?>

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card shadow-sm border-0">
                <div class="card-body p-4">
                    <h4 class="card-title text-center mb-4">Semak Status Permohonan</h4>
                    
                    <form id="statusForm" class="needs-validation" novalidate>
                        
                    <!-- Personal Info Fields -->
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label">No. Kad Pengenalan</label>
                                <input type="text" class="form-control" name="ic_no"
                                       pattern="\d{6}-\d{2}-\d{4}">
                            </div>

                            <div class="col-md-6 mb-3">
                                <label class="form-label">Nama Penuh</label>
                                <input type="text" class="form-control" name="name">
                            </div>
                        </div>    

                        <div class="text-center mb-3">
                            <div class="divider d-flex align-items-center justify-content-center">
                                <span class="divider-text">ATAU</span>
                            </div>
                        </div>

                        <!-- Reference Number Field -->
                        <div class="mb-3">
                            <label class="form-label">Nombor Rujukan</label>
                            <input type="text" class="form-control" name="reference_no" 
                                   placeholder="Contoh: REF202501160001">
                            <div class="form-text">Sila masukkan nombor rujukan yang diberikan semasa pendaftaran.</div>
                        </div>

                        <div class="d-grid">
                            <button type="submit" class="btn btn-success">
                                <i class="bi bi-search me-2"></i>Semak Status
                            </button>
                        </div>
                    </form>

                    <!-- Status Result -->
                    <div id="statusResult" class="mt-4" style="display: none;">
                        <hr>
                        <div class="alert alert-info">
                            <div class="d-flex align-items-center">
                                <i class="bi bi-info-circle-fill me-2"></i>
                                <div id="statusMessage"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Add Back Button -->
                    <div class="text-center mt-4">
                        <a href="/" class="btn btn-outline-secondary">
                            <i class="bi bi-arrow-left me-2"></i>Kembali ke Halaman Utama
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('statusForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const refNo = this.querySelector('[name="reference_no"]').value;
        const icNo = this.querySelector('[name="ic_no"]').value;
        const name = this.querySelector('[name="name"]').value;
        
        // Check if either reference number OR (IC and name) are provided
        if (!refNo && (!icNo || !name)) {
            alert('Sila masukkan sama ada nombor rujukan ATAU no. kad pengenalan dan nama.');
            return;
        }
        
        // Prepare data based on what was provided
        const data = refNo ? 
            { reference_no: refNo } : 
            { ic_no: icNo, name: name };
        
        checkStatus(data);
    });

    function checkStatus(data) {
        console.log('Sending data:', data); // Log the data being sent
        
        fetch('/guest/check-status', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(async response => {
            console.log('Response status:', response.status); // Log the response status
            console.log('Response headers:', [...response.headers.entries()]); // Log the headers
            
            const text = await response.text();
            console.log('Raw response:', text); // Log the raw response text
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}, body: ${text}`);
            }
            
            try {
                return JSON.parse(text);
            } catch (e) {
                console.error('JSON parse error:', e);
                throw new Error(`Invalid JSON response: ${text}`);
            }
        })
        .then(data => {
            console.log('Processed data:', data); // Log the processed data
            const statusResult = document.getElementById('statusResult');
            const statusMessage = document.getElementById('statusMessage');
            
            if (data.success) {
                statusResult.style.display = 'block';
                statusMessage.textContent = data.message;
                const alert = statusResult.querySelector('.alert');
                alert.className = 'alert ' + getAlertClass(data.status);
            } else {
                throw new Error(data.error || 'Error checking status');
            }
        })
        .catch(error => {
            console.error('Error details:', error); // Log detailed error information
            const statusResult = document.getElementById('statusResult');
            const statusMessage = document.getElementById('statusMessage');
            statusResult.style.display = 'block';
            statusMessage.textContent = error.message;
            statusResult.querySelector('.alert').className = 'alert alert-danger';
        });
    }

    function getAlertClass(status) {
        switch(status) {
            case 'Pending':
                return 'alert-warning';
            case 'Lulus':
            case 'Active':
                return 'alert-success';
            case 'Tolak':
            case 'Inactive':
                return 'alert-danger';
            default:
                return 'alert-info';
        }
    }
});
</script>

<style>
.card {
    border-radius: 15px;
}

.form-control:focus {
    border-color: #198754;
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.alert {
    border-radius: 8px;
}

.btn-success {
    padding: 12px 20px;
}

.divider {
    position: relative;
    margin: 1rem 0;
}

.divider::before,
.divider::after {
    content: "";
    flex: 1;
    border-top: 1px solid #dee2e6;
    margin: 0 1rem;
}

.divider-text {
    color: #6c757d;
    font-size: 0.9rem;
    background: #fff;
    padding: 0 1rem;
}

.form-text {
    font-size: 0.875rem;
    color: #6c757d;
}
</style>

<?php require_once '../app/views/layouts/footer.php'; ?> 