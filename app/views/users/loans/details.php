<?php 
    $title = 'Maklumat Pembiayaan';
    require_once '../app/views/layouts/header.php';
?>

<div class="container mt-4 mb-5">
    <div class="card border-0 shadow-sm h-100">
        <div class="card-header bg-white py-3">
            <div class="d-flex justify-content-between align-items-center">
                <h5 class="card-title mb-0 text-primary">
                    <i class="bi bi-credit-card me-2"></i>Maklumat Pembiayaan
                </h5>
                <a href="/users/loans/status" class="btn btn-outline-secondary btn-sm">
                    <i class="bi bi-arrow-left me-2"></i>Kembali
                </a>
            </div>
        </div>

        <div class="card-body">
            <div class="row g-4">
                <div class="col-md-6">
                    <label class="text-muted small d-block">No. Rujukan</label>
                    <p class="mb-0 fw-medium"><?= htmlspecialchars($loan['reference_no']) ?></p>
                </div>
                <div class="col-md-6">
                    <label class="text-muted small d-block">Jenis Pembiayaan</label>
                    <p class="mb-0">
                        <span class="badge bg-primary"><?= htmlspecialchars($loan['loan_type']) ?></span>
                    </p>
                </div>
                <div class="col-md-6">
                    <label class="text-muted small d-block">Jumlah (RM)</label>
                    <p class="mb-0 fw-medium"><?= number_format($loan['amount'], 2) ?></p>
                </div>
                <div class="col-md-6">
                    <label class="text-muted small d-block">Bayaran Bulanan (RM)</label>
                    <p class="mb-0 fw-medium"><?= number_format($loan['monthly_payment'], 2) ?></p>
                </div>
                <div class="col-md-6">
                    <label class="text-muted small d-block">Tempoh</label>
                    <p class="mb-0"><?= htmlspecialchars($loan['duration']) ?> bulan</p>
                </div>
                <div class="col-md-6">
                    <label class="text-muted small d-block">Status</label>
                    <p class="mb-0">
                        <span class="badge bg-<?= $loan['status'] === 'approved' ? 'success' : 
                            ($loan['status'] === 'pending' ? 'warning' : 'danger') ?>">
                            <?= ucfirst($loan['status']) ?>
                        </span>
                    </p>
                </div>
                <div class="col-md-6">
                    <label class="text-muted small d-block">Tarikh Mohon</label>
                    <p class="mb-0"><?= date('d/m/Y', strtotime($loan['date_received'])) ?></p>
                </div>
            </div>
        </div>
    </div>
</div>

<?php require_once '../app/views/layouts/footer.php'; ?>