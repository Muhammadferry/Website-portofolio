const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
})

$(document).ready(function () {
    $("#message-form").validate({
      rules: {
        nama: {
          required: true,
          maxlength: 30,
        },
        email: {
          required: true,
          email: true,
          maxlength: 30,
        },
        nomor: {
          required: true,
          number: true,
          maxlength: 12,
        },
        pesan: {
          required: true,
          maxlength: 150,
        },
      },
      messages: {
        nama: {
          required: "Nama lengkap harus diisi",
          maxlength: "Nama lengkap tidak boleh lebih dari 30 karakter",
        },
        email: {
          required: "Email harus diisi",
          email: "Format email tidak valid",
          maxlength: "Email tidak boleh lebih dari 30 karakter",
        },
        nomor: {
          required: "Nomor handphone harus diisi",
          number: "Nomor handphone harus berupa angka",
          maxlength: "Nomor handphone tidak boleh lebih dari 12 digit",
        },
        pesan: {
          required: "Pesan harus diisi",
          maxlength: "Pesan tidak boleh lebih dari 150 karakter",
        },
      },
    });
  });