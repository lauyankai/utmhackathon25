<?php 
    $title = 'Kemaskini Admin';
    require_once '../app/views/layouts/header.php';
?>

<div class="container-fluid mt-4">
    <div class="row justify-content-center">
        <div class="col-lg-8">
            <div class="card border-0 shadow-sm">
                <div class="card-body p-4">
                    <div class="row">
                        <!-- Left Column - Profile Info -->
                        <div class="col-md-4 border-end">
                            <div class="text-center mb-4">
                                <div class="avatar-placeholder mb-3">
                                    <i class="bi bi-person-circle display-1 text-primary opacity-50"></i>
                                </div>
                                <h5 class="mb-1"><?= htmlspecialchars($admin['username']) ?></h5>
                                <p class="text-muted mb-3"><?= htmlspecialchars($admin['email']) ?></p>
                                <div class="badge bg-primary">Administrator</div>
                            </div>

                            <div class="list-group list-group-flush small">
                                <div class="list-group-item px-0">
                                    <i class="bi bi-shield-check me-2 text-success"></i>
                                    Status: Aktif
                                </div>
                                <div class="list-group-item px-0">
                                    <i class="bi bi-calendar3 me-2 text-primary"></i>
                                    ID: <?= htmlspecialchars($admin['id']) ?>
                                </div>
                            </div>
                        </div>

                        <!-- Right Column - Edit Form -->
                        <div class="col-md-8">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <div>
                                    <h5 class="card-title mb-1">
                                        <i class="bi bi-person-gear me-2"></i>Kemaskini Admin
                                    </h5>
                                    <p class="text-muted small mb-0">Kemaskini maklumat admin</p>
                                </div>
                                <a href="/admin" class="btn btn-outline-secondary btn-sm">
                                    <i class="bi bi-arrow-left me-2"></i>Kembali
                                </a>
                            </div>

                            <?php if (isset($_SESSION['error'])): ?>
                                <div class="alert alert-danger d-flex align-items-center">
                                    <i class="bi bi-exclamation-triangle-fill me-2"></i>
                                    <?= $_SESSION['error']; unset($_SESSION['error']); ?>
                                </div>
                            <?php endif; ?>

                            <form action="/admin/update-admin/<?= $admin['id'] ?>" method="POST">
                                <div class="mb-3">
                                    <label class="form-label d-flex align-items-center">
                                        <i class="bi bi-person me-2 text-primary"></i>Nama Pengguna
                                    </label>
                                    <input type="text" 
                                           name="username" 
                                           class="form-control" 
                                           value="<?= htmlspecialchars($admin['username']) ?>" 
                                           required>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label d-flex align-items-center">
                                        <i class="bi bi-envelope me-2 text-primary"></i>Emel
                                    </label>
                                    <input type="email" 
                                           name="email" 
                                           class="form-control" 
                                           value="<?= htmlspecialchars($admin['email']) ?>" 
                                           required>
                                </div>

                                <div class="alert alert-info d-flex align-items-center mb-4">
                                    <i class="bi bi-info-circle-fill me-2"></i>
                                    <div>Biarkan medan kata laluan kosong jika tidak ingin menukar kata laluan</div>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label d-flex align-items-center">
                                        <i class="bi bi-key me-2 text-primary"></i>Kata Laluan Baru
                                    </label>
                                    <div class="input-group">
                                        <input type="password" name="new_password" class="form-control" id="newPassword">
                                        <button class="btn btn-outline-secondary" type="button" onclick="togglePassword('newPassword')">
                                            <i class="bi bi-eye"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="mb-4">
                                    <label class="form-label d-flex align-items-center">
                                        <i class="bi bi-key-fill me-2 text-primary"></i>Sahkan Kata Laluan Baru
                                    </label>
                                    <div class="input-group">
                                        <input type="password" name="confirm_password" class="form-control" id="confirmPassword">
                                        <button class="btn btn-outline-secondary" type="button" onclick="togglePassword('confirmPassword')">
                                            <i class="bi bi-eye"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="d-grid gap-2">
                                    <button type="submit" class="btn btn-primary">
                                        <i class="bi bi-save me-2"></i>Simpan Perubahan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.avatar-placeholder {
    width: 120px;
    height: 120px;
    background-color: #f8f9fa;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    transition: transform 0.2s;
}

.avatar-placeholder:hover {
    transform: scale(1.05);
}

.list-group-item {
    transition: background-color 0.2s;
}

.list-group-item:hover {
    background-color: #f8f9fa;
}

.form-control:focus {
    border-color: #0d6efd;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
}
</style>

<script>
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const type = input.type === 'password' ? 'text' : 'password';
    input.type = type;
    
    // Update icon
    const icon = event.currentTarget.querySelector('i');
    icon.classList.toggle('bi-eye');
    icon.classList.toggle('bi-eye-slash');
}
</script>

<?php require_once '../app/views/layouts/footer.php'; ?>