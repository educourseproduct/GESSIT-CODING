const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nama = document.querySelector('#nama');
  const namaSekolah = document.querySelector('#sekolah');
  const email = document.querySelector('#email');
  const tglLahir = document.querySelector('#tglLahir');
  const saudara = document.querySelector('#saudara');
  const kota = document.querySelector('#kota');
  const telepon = document.querySelector('#telepon');
  const gender = document.querySelector('input[name="gender"]:checked');
  
  fetch('/simpan-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nama: nama.value,
      namaSekolah: namaSekolah.value,
      email: email.value,
      tglLahir: tglLahir.value,
      saudara: saudara.value,
      gender: gender ? gender.value : null,
      kota: kota.value,
      telepon: telepon.value
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    alert(data.message);
  })
  .catch(err => {
    console.error('FETCH ERROR:', err);
  });
});
