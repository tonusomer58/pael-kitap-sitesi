document.addEventListener("DOMContentLoaded", function () {
  // --- AOS ANIMATION INIT ---
  AOS.init({
    duration: 800,
    offset: 150,
    delay: 100,
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

    // --- PARALLAX EFEKTİ (YEŞİL BANNER) ---
    parallaxEffect();
  };

  // --- PARALLAX FONKSİYONU ---
  function parallaxEffect() {
    const greenBanner = document.querySelector(".green-banner");
    if (greenBanner) {
      const scrolled = window.pageYOffset;
      const bannerTop = greenBanner.offsetTop;
      const bannerHeight = greenBanner.offsetHeight;

      // Banner ekranda görünüyorsa parallax uygula
      if (
        scrolled + window.innerHeight > bannerTop &&
        scrolled < bannerTop + bannerHeight
      ) {
        const yPos = (scrolled - bannerTop) * 0.5; // 0.5 = yavaşlama oranı

        // SADECE ::before (bulut resmi) hareket eder
        greenBanner.style.setProperty("--parallax-y", `${yPos}px`);
      }
    }
  }

  // İlk yüklemede de kontrol et
  parallaxEffect();

  // --- SİPARİŞ FORMU (WHATSAPP) ---
  const orderForm = document.getElementById("orderForm");

  if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Form verilerini al
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const book = document.getElementById("book-select").value;
      const address = document.getElementById("address").value;
      const note = document.getElementById("note").value;

      // WhatsApp Mesajı Oluştur
      const whatsappMessage =
        `Merhaba, web sitenizden kitap siparişi vermek istiyorum.%0A%0A` +
        `*İsim Soyisim:* ${name}%0A` +
        `*Telefon:* ${phone}%0A` +
        `*Seçilen Kitap:* ${book}%0A` +
        `*Adres:* ${address}%0A` +
        `*Not:* ${note}`;

      // BURAYA KENDİ NUMARANI YAZ
      const phoneNumber = "1111";

      window.open(
        `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
        "_blank"
      );
    });
  }
});
