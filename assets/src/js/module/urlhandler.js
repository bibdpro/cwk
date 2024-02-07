// module/urlhandler.js

/*
    // Mendapatkan fragmen dari URL
    var fragment = window.location.hash;

    // Mengambil kata di antara "#" dan "?id="
    var match = fragment.match(/#(\w{1,6})\?id=(\d{6,})/);

    // Mengekstrak kata kunci dan nilai ID jika ditemukan
    if (match && match.length > 2) {
      var keyword = match[1];
      var id = match[2];

      console.log("Kata kunci: " + keyword);

      // Memeriksa apakah nilai ID adalah integer dengan minimal 6 digit
      if (/^\d{6,}$/.test(id)) {
        console.log("Nilai ID (integer dengan minimal 6 digit): " + id);
      } else {
        console.log("Nilai ID tidak memenuhi kriteria");

        // Mengarahkan kembali ke URL original
        window.location.href = window.location.origin;
      }
    } else {
      console.log("Kata kunci atau nilai ID tidak ditemukan");

      // Mengarahkan kembali ke URL original
      window.location.href = window.location.origin;
    }*/
    
    