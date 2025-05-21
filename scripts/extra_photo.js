const logos = document.querySelectorAll('.eskul-logos img');
const foto = document.getElementById('foto-ekskul');
const defaultSrc = foto.src;
const eskulNama = document.getElementById('eskul-nama');

logos.forEach(logo => {
  logo.addEventListener('mouseenter', () => {
    const newSrc = logo.getAttribute('data-foto');
    const nama = logo.getAttribute('data-nama');

    eskulNama.textContent = nama;
    eskulNama.style.opacity = 1;

    if (newSrc !== foto.src) {
      foto.style.opacity = 0;
      setTimeout(() => {
        foto.src = newSrc;
        foto.style.opacity = 1;
      }, 300);
    }
  });

  logo.addEventListener('mouseleave', () => {
    eskulNama.textContent = '';
    eskulNama.style.opacity = 0;

    foto.style.opacity = 0;
    setTimeout(() => {
      foto.src = defaultSrc;
      foto.style.opacity = 1;
    }, 300);
  });
});
