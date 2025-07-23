       // Menunggu hingga seluruh konten halaman dimuat
        document.addEventListener('DOMContentLoaded', () => {
            
            // Mengambil semua elemen yang relevan dari DOM
            const checkboxes = document.querySelectorAll('.task-checkbox');
            const progressBar = document.getElementById('progressBar');
            const progressText = document.getElementById('progressText');
            const totalTasks = checkboxes.length;

            // Fungsi untuk memperbarui progress bar dan teksnya
            function updateProgress() {
                // Menghitung jumlah task yang sudah dicentang
                const completedTasks = document.querySelectorAll('.task-checkbox:checked').length;
                
                // Menghitung persentase kemajuan
                // Mencegah pembagian dengan nol jika tidak ada task
                const percentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
                
                // Memperbarui lebar progress bar sesuai persentase
                progressBar.style.width = `${percentage}%`;

                // Memperbarui teks yang menampilkan jumlah dan persentase
                progressText.textContent = `${completedTasks} / ${totalTasks} Selesai (${Math.round(percentage)}%)`;
            }

            // Menambahkan event listener ke setiap checkbox
            // Setiap kali status checkbox berubah (dicentang/tidak), fungsi updateProgress akan dipanggil
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', updateProgress);
            });

            // Memanggil fungsi updateProgress sekali di awal untuk menginisialisasi tampilan
            updateProgress();
        });