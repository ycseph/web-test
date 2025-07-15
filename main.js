// Ganti dengan path gambar produk lain jika ada
const produkImages = [
  'assets/roti-produk/antbakery_1701228665_3246463803447892352_2222402396 1.png',
  'assets/roti-produk/(2).jpg',
  'assets/roti-produk/(3).jpg',
  'assets/roti-produk/(4).jpg',
  'assets/roti-produk/(5).jpg',
  'assets/roti-produk/(6).jpg',
  'assets/roti-produk/(1).jpg',
];
let produkIdx = 0;
window.addEventListener('DOMContentLoaded', function() {
  const produkImg = document.getElementById('produk-img');
  document.getElementById('produk-prev').onclick = function() {
    produkImg.classList.add('opacity-0', 'transition-opacity', 'duration-300');
    setTimeout(() => {
      produkIdx = (produkIdx - 1 + produkImages.length) % produkImages.length;
      produkImg.src = produkImages[produkIdx];
      produkImg.onload = () => {
        produkImg.classList.remove('opacity-0');
      };
    }, 300);
  };
  document.getElementById('produk-next').onclick = function() {
    produkImg.classList.add('opacity-0', 'transition-opacity', 'duration-300');
    setTimeout(() => {
      produkIdx = (produkIdx + 1) % produkImages.length;
      produkImg.src = produkImages[produkIdx];
      produkImg.onload = () => {
        produkImg.classList.remove('opacity-0');
      };
    }, 300);
  };
});
