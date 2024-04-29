function scrollToSection(){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })

  const sidebar = document.querySelector('.sidebar');

  sidebar.classList.toggle('ativo');

  dark.style.display = 'none';
}

const links = document.querySelectorAll('.menu__link');

links.forEach((link) => {
  link.addEventListener('click', scrollToSection);
})

const btnOpen = document.querySelector('.menu__btn');

function openMenu(){
  const sidebar = document.querySelector('.sidebar');

  sidebar.classList.toggle('ativo');

  dark.style.display = 'block';
}

btnOpen.addEventListener('click', openMenu);

const dark = document.querySelector('.fundoEscuro');

function closeFundo(){
  const sidebar = document.querySelector('.sidebar');

  sidebar.classList.toggle('ativo');
  dark.style.display = 'none';
}

dark.addEventListener('click', closeFundo);

