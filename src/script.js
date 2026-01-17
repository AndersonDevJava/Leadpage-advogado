  const menuBtn = document.getElementById('menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const menuIcon = menuBtn.querySelector('i');

      menuBtn.addEventListener('click', () => {
        // Alterna visibilidade do menu
        mobileMenu.classList.toggle('hidden');

        // Alterna ícone hambúrguer/X
        if (mobileMenu.classList.contains('hidden')) {
          menuIcon.classList.remove('fa-times');
          menuIcon.classList.add('fa-bars');
        } else {
          menuIcon.classList.remove('fa-bars');
          menuIcon.classList.add('fa-times');
        }
      });

      // Fecha menu ao clicar em um link
      document.querySelectorAll('#mobile-menu a').forEach((link) => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          menuIcon.classList.remove('fa-times');
          menuIcon.classList.add('fa-bars');
        });
      });