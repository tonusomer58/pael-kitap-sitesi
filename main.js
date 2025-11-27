document.addEventListener("DOMContentLoaded", function () {
  // --- AOS ANIMATION INIT (GÜNCELLENDİ) ---
  AOS.init({
    duration: 800, // Animasyon süresi
    offset: 50, // Tetiklenme mesafesi (Mobilde daha çabuk görünmesi için düşürüldü)
    once: true, // Animasyon sadece 1 kere çalışsın (Performans artırır, takılmayı önler)
    delay: 0, // Gecikmeyi sıfırladık
  });

  // --- NAVBAR MENU ---
  let menuBtn = document.querySelector("#menu-btn");
  let navbar = document.querySelector(".navbar");

  if (menuBtn) {
    menuBtn.onclick = () => {
      menuBtn.classList.toggle("fa-times");
      navbar.classList.toggle("active");
    };
  }

  window.onscroll = () => {
    if (menuBtn) {
      menuBtn.classList.remove("fa-times");
      navbar.classList.remove("active");
    }
  };
});
