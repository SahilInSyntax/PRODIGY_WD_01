window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    let current = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });
  
    document.querySelectorAll('nav ul li a').forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href').substring(1) === current) {
        a.classList.add('active');
      }
    });
  
    if (window.pageYOffset > 0) {
      navbar.style.backgroundColor = '#333'; // Change background color when scrolled
    } else {
      navbar.style.backgroundColor = 'transparent'; // Reset background color when scrolled to top
    }
  });
  
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  