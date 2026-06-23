// ==========================================
// KUNCI JAWABAN JAVASCRIPT: MENTOR / PENDIDIK (Sesi 18)
// Implementasi lengkap AJAX pemuatan JSON & XML eksternal.
// ==========================================

$(document).ready(function() {

    // ==========================================
    // [SOLUSI MISI 1]: Fungsi Render Data (displayResult)
    // ==========================================
    function displayResult(animeList) {
        const listContainer = $("#anime-list");
        
        if (animeList.length === 0) {
            listContainer.html(`
                <div class="col-12 text-center text-muted py-5 fs-5">
                    Tidak ada anime ditemukan!
                </div>
            `);
            return;
        }
        
        // Memetakan array data anime ke dalam format kartu HTML
        const cardsHTML = animeList.map(anime => {
            return `
                <div class="col-md-6 col-lg-4">
                    <div class="anime-card">
                        <h5 class="fw-bold m-0 text-white">${anime.judul}</h5>
                        <p class="text-muted small mb-3 mt-1">Genre: <span class="text-info">${anime.genre}</span></p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="badge bg-indigo text-light border border-indigo px-2 py-1" style="background: rgba(99, 102, 241, 0.2)">AJAX Loaded</span>
                            <span class="text-warning font-monospace">Rating: <strong>${anime.rating}</strong></span>
                        </div>
                    </div>
                </div>
            `;
        });
        
        // Gabungkan seluruh baris string HTML dan masukkan ke container
        listContainer.html(cardsHTML.join(""));
    }


    // ==========================================
    // [SOLUSI MISI 3 & 4]: Memuat Data AJAX (displayData & Error handling .fail)
    // ==========================================
    function displayData(kategori) {
        const listContainer = $("#anime-list");
        
        // Tampilkan teks indikator loading
        listContainer.html('<div class="col-12 text-center text-muted py-5">Sedang memuat data...</div>');
        
        let allAnime = [];

        // 1. Memuat file JSON (data.json) menggunakan $.getJSON()
        $.getJSON("data.json", function(jsonData) {
            // Gabungkan data JSON ke array utama
            allAnime = [...jsonData];
            
            // 2. Memuat file XML (data.xml) menggunakan $.ajax()
            $.ajax({
                url: "data.xml",
                dataType: "xml",
                success: function(xmlData) {
                    // Loop setiap tag <item> pada XML
                    $(xmlData).find("item").each(function() {
                        const judul = $(this).find("judul").text().trim();
                        const genre = $(this).find("genre").text().trim();
                        const rating = parseFloat($(this).find("rating").text()) || 0.0;
                        
                        // Push objek data ke array allAnime
                        allAnime.push({
                            judul: judul,
                            genre: genre,
                            rating: rating
                        });
                    });
                    
                    // Lakukan filter data berdasarkan pilihan dropdown
                    const filtered = (kategori === "all") 
                        ? allAnime 
                        : allAnime.filter(anime => anime.genre.toLowerCase() === kategori.toLowerCase());
                    
                    // Render hasil ke layar
                    displayResult(filtered);
                }
            })
            // Penanganan eror jika data.xml gagal dimuat
            .fail(function(xhr, status, error) {
                console.error("Gagal mengambil data XML:", error);
                
                // Fallback: Jika XML eror, tetap tampilkan data dari file JSON
                const filtered = (kategori === "all") 
                    ? allAnime 
                    : allAnime.filter(anime => anime.genre.toLowerCase() === kategori.toLowerCase());
                
                displayResult(filtered);
                
                // Tempelkan info warning kecil di konsol halaman
                listContainer.append('<div class="col-12 text-center text-warning mt-3 small">Peringatan: Gagal memuat beberapa data klasik (XML).</div>');
            });
        })
        // Penanganan eror jika data.json gagal dimuat
        .fail(function(xhr, status, error) {
            console.error("Gagal mengambil data JSON:", error);
            listContainer.html('<div class="col-12 text-center text-danger py-5">Gagal memuat database anime! Silakan periksa server lokal.</div>');
        });
    }


    // ==========================================
    // [SOLUSI MISI 2]: Event Dropdown Filter (change)
    // ==========================================
    $("#filter").change(function() {
        const kategoriGenre = $(this).val();
        displayData(kategoriGenre);
    });


    // ==========================================
    // INISIALISASI PEMUATAN AWAL
    // ==========================================
    displayData("all");
});
