let animeList = [];

// Fungsi untuk mengubah status tontonan (Watched / Unwatch)
function toggleAnime(id) {
  animeList = animeList.map(a => {
    if (a.id === id) {
      a.isWatched = !a.isWatched;
    }
    return a;
  });
  renderAnime();
}

// Fungsi untuk menghapus item dari Watchlist
function deleteAnime(id) {
  animeList = animeList.filter(a => a.id !== id);
  renderAnime();
}

// Fungsi untuk merender ulang seluruh daftar data ke halaman browser
// Menyertakan manipulasi class ternary dinamis (redup jika watched)
function renderAnime() {
  $('#anime-list').empty();
  animeList.forEach(anime => {
    $('#anime-list').append(`
      <div class="card mb-2">
        <div class="card-body ${anime.isWatched ? 'bg-light text-muted' : ''}">
          <h5 class="card-title">${anime.title}</h5>
          <p class="card-text">${anime.description}</p>
          <button class="btn btn-sm btn-success" onclick="toggleAnime(${anime.id})">
            ${anime.isWatched ? 'Unwatch' : 'Watched'}
          </button>
          <button class="btn btn-sm btn-danger" onclick="deleteAnime(${anime.id})">Delete</button>
        </div>
      </div>
    `);
  });
}

// Fungsi pembuka Notifikasi Popup Toast Sukses
function showSuccessToast() {
  const toast = new bootstrap.Toast(document.getElementById('successToast'));
  toast.show();
}

// Fungsi pembuka Notifikasi Popup Toast Gagal
function showFailToast() {
  const toast = new bootstrap.Toast(document.getElementById('failToast'));
  toast.show();
}

// Inisialisasi program setelah dokumen selesai dimuat
$(document).ready(() => {
  // Mengambil pasokan data awal dari berkas JSON secara asinkron
  $.getJSON('database.json', (data) => {
    animeList = data.map(a => new Anime(a.id, a.title, a.description, a.isWatched));
    renderAnime();
  });

  // Menangani pengiriman formulir tambah data baru
  $('#animeForm').submit(e => {
    e.preventDefault();
    try {
      const title = $('#animeTitle').val();
      const desc = $('#animeDesc').val();
      const newId = Date.now(); // Auto-ID Generator berbasis milidetik

      const newAnime = new Anime(newId, title, desc, false);
      animeList.push(newAnime);
      
      renderAnime();
      $('#animeModal').modal('hide');
      $('#animeForm').trigger('reset');
      showSuccessToast();
    } catch (error) {
      console.error("Gagal menambahkan anime:", error);
      showFailToast();
    }
  });
});