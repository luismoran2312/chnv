document.addEventListener('DOMContentLoaded', () => {
  const btnCorreoMenu = document.getElementById('btn-correo');
  const btnCorreoFooter = document.getElementById('btn-correo-footer');
  const formContacto = document.getElementById('form-contacto');
  const enlaces = document.querySelectorAll('nav a[data-seccion]');
  const secciones = document.querySelectorAll('main section');

  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');

  // Toggle menú hamburguesa
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  // Submenú móvil
  const navItems = document.querySelectorAll('.nav-item > a');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if (window.innerWidth <= 700) {
        e.preventDefault();
        const parent = item.parentElement;
        parent.classList.toggle('open');
      }
    });
  });

  // Navegación por secciones
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
      e.preventDefault();

      enlaces.forEach(a => a.classList.remove('activo'));
      enlace.classList.add('activo');

      const seccionId = enlace.getAttribute('data-seccion');

      secciones.forEach(sec => {
        if (sec.id === seccionId) {
          sec.classList.add('active');

          const bg = enlace.getAttribute('data-bg');
          if (bg) document.body.style.backgroundImage = `url('${bg}')`;

          document.body.className = '';
          document.body.classList.add(`seccion-${seccionId}`);
        } else {
          sec.classList.remove('active');
        }
      });

      // Si se hace clic en otra sección, ocultar el formulario de contacto
      if (seccionId !== 'contacto') {
        formContacto.classList.remove('mostrar');
        btnCorreoMenu.setAttribute('aria-expanded', false);
        btnCorreoFooter.setAttribute('aria-expanded', false);
      }
    });
  });

  function toggleFormulario() {
    formContacto.classList.toggle('mostrar');
    const isVisible = formContacto.classList.contains('mostrar');
    btnCorreoMenu.setAttribute('aria-expanded', isVisible);
    btnCorreoFooter.setAttribute('aria-expanded', isVisible);
  }

  function abrirContactoDesdeFooter() {
    let seccionActiva = null;
    secciones.forEach(sec => {
      if (sec.classList.contains('active')) seccionActiva = sec.id;
    });

    if (seccionActiva !== 'contacto') {
      secciones.forEach(sec => {
        if (sec.id === 'contacto') sec.classList.add('active');
        else sec.classList.remove('active');
      });

      enlaces.forEach(a => a.classList.remove('activo'));
      enlaces.forEach(a => {
        if (a.getAttribute('data-seccion') === 'contacto') {
          a.classList.add('activo');
          const bg = a.getAttribute('data-bg');
          if (bg) document.body.style.backgroundImage = `url('${bg}')`;
        }
      });
    }

    if (!formContacto.classList.contains('mostrar')) {
      formContacto.classList.add('mostrar');
      btnCorreoMenu.setAttribute('aria-expanded', true);
      btnCorreoFooter.setAttribute('aria-expanded', true);
    } else {
      toggleFormulario();
    }
  }

  btnCorreoMenu.addEventListener('click', toggleFormulario);
  btnCorreoFooter.addEventListener('click', abrirContactoDesdeFooter);
});


/* const colores = [
  '#ff6a00',    
   'rgba(238, 9, 121, 1)',   
   'rgba(106, 17, 203, 1)',
   '#2575fc'    
*/ 


  document.addEventListener('DOMContentLoaded', () => {
    const diaSemana = new Date().getDay(); // Domingo = 0, Lunes = 1, ..., Sábado = 6
    const elementos = document.querySelectorAll('.lista-horario li[data-dia]');
    
    elementos.forEach(el => {
      if (parseInt(el.getAttribute('data-dia')) === diaSemana) {
        el.classList.add('hoy');
      }
    });
  });

