<script>
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuIcon.classList.toggle('open');
  });
</script>
