document.addEventListener("DOMContentLoaded", () => {
    /* --- Menu Mobile --- */
    const menuToggle = document.querySelector('.icons a:first-child'); // Supondo que o primeiro ícone seja o de menu
    const navbar = document.querySelector('.navbar');
  
    menuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      navbar.classList.toggle('active');
    });
  
    /* --- Smooth Scroll para âncoras --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  
    /* --- Alteração do Header no Scroll --- */
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    /* --- Slider de Avaliações --- */
    const reviewBoxes = document.querySelectorAll('.review .box-container .box');
    let currentReview = 0;
    const totalReviews = reviewBoxes.length;
  
    // Função para mostrar apenas a avaliação atual
    function showReview(index) {
      reviewBoxes.forEach((box, i) => {
        box.style.display = (i === index) ? 'block' : 'none';
      });
    }
    // Inicializa com a primeira avaliação visível
    showReview(currentReview);
  
    // Altera a avaliação a cada 5 segundos
    setInterval(() => {
      currentReview = (currentReview + 1) % totalReviews;
      showReview(currentReview);
    }, 5000);
  
    /* --- Botão "Voltar ao Topo" --- */
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = 'Voltar ao Topo';
    backToTopButton.id = 'backToTop';
    document.body.appendChild(backToTopButton);
  
    // Estilização inicial via JS (pode ser transferida para o CSS)
    backToTopButton.style.display = 'none';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.padding = '10px 20px';
    backToTopButton.style.background = 'var(--main-color)';
    backToTopButton.style.border = 'none';
    backToTopButton.style.color = '#fff';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.zIndex = '100';
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  