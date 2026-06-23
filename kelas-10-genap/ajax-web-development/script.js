// ==========================================
// LEMBAR KERJA JAVASCRIPT: SISWA (Sesi 18)
// Tuliskan kodingan logika AJAX kamu di berkas eksternal ini.
// ==========================================

$(document).ready(function() {

    // ==========================================
    // [MISI 1]: Fungsi Render Data (displayResult)
    // Selesaikan fungsi displayResult di bawah.
    // Tugas:
    // 1. Dapatkan elemen target "#anime-list".
    // 2. Jika animeList kosong, render pesan: "Tidak ada produk ditemukan".
    // 3. Jika ada, gunakan .map() untuk membuat template HTML kartu anime (grid bootstrap).
    // 4. Masukkan string hasil gabungan map (.join("")) ke innerHTML target.
    // ==========================================
    function displayResult(animeList) {
        // Tulis kodingan displayResult kamu di bawah ini
        
    }


    // ==========================================
    // [MISI 3 & 4]: Memuat Data AJAX (displayData)
    // Lengkapi fungsi displayData untuk memuat data.json & data.xml secara asinkron.
    // Terapkan penanganan error menggunakan .fail().
    // ==========================================
    function displayData(kategori) {
        const listContainer = $("#anime-list");
        
        // 1. Tampilkan teks loading di kontainer
        listContainer.html('<div class="col-12 text-center text-muted py-5">Sedang memuat data...</div>');
        
        // Deklarasi array penampung utama gabungan
        let allAnime = [];

        // 2. Panggil $.getJSON untuk mengambil data.json (Anime Modern)
        $.getJSON("data.json", function(jsonData) {
            // Gabungkan hasil data JSON ke array allAnime
            
            
            // 3. Di dalam callback sukses JSON, panggil $.ajax untuk mengambil data.xml (Anime Klasik)
            $.ajax({
                url: "data.xml",
                dataType: "xml",
                success: function(xmlData) {
                    // Temukan setiap tag <item> dalam file XML dan lakukan perulangan
                    
                    
                    // Lakukan filter genre berdasarkan parameter kategori
                    let filtered = [];
                    
                    
                    // Panggil fungsi displayResult dengan array hasil filter
                    displayResult(filtered);
                }
            })
            // Tambahkan .fail() untuk penanganan error XML
            .fail(function(xhr, status, error) {
                console.error("Gagal memuat XML:", error);
                
                // Fallback: Jika XML gagal, tetap tampilkan data dari JSON
                let filtered = [];
                
                displayResult(filtered);
            });
        })
        // Tambahkan .fail() untuk penanganan error JSON
        .fail(function(xhr, status, error) {
            console.error("Gagal memuat JSON:", error);
            listContainer.html('<div class="col-12 text-center text-danger py-5">Gagal memuat database anime!</div>');
        });
    }


    // ==========================================
    // [MISI 2]: Event Dropdown Filter (change)
    // Tangkap event perubahan select option "#filter", lalu panggil fungsi
    // displayData() dengan meneruskan kategori genre terpilih.
    // ==========================================
    
    


    // ==========================================
    // INISIALISASI PEMUATAN AWAL (Kategori "all")
    // ==========================================
    displayData("all");
});
