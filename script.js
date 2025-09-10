

/////////////////////////////////////////////////////7/ Header///////////////////////////////////////////////////////




document.addEventListener('DOMContentLoaded', () => {
    // Primer bloque (menú principal)
    const menuToggle = document.querySelector('.section-menu-toggle');
    const closeMenu = document.querySelector('.section-close-menu');
    const menu = document.querySelector('.section-menu');
    const submenuToggles = document.querySelectorAll('.section-menu > li > a');
    const submenus = document.querySelectorAll('.section-submenu');

    // Verificar si los elementos existen antes de agregar eventos
    if (menuToggle && closeMenu && menu) {
        menuToggle.addEventListener('mouseover', () => {
            menu.classList.add('show');
        });

        closeMenu.addEventListener('mouseout', () => {
            menu.classList.remove('show');
        });
    }

    // Asegúrate de que los submenus existen antes de agregar event listeners
    if (submenuToggles.length > 0 && submenus.length > 0) {
        submenuToggles.forEach(toggle => {
            toggle.addEventListener('mouseover', function (event) {
                const submenu = this.nextElementSibling;
                const icon = this.querySelector('.fa');

                if (submenu) {
                    submenus.forEach(sm => {
                        if (sm !== submenu) {
                            sm.style.display = 'none';
                            const otherIcon = sm.previousElementSibling.querySelector('.fa');
                            if (otherIcon) {
                                otherIcon.classList.remove('section-rotate');
                            }
                        }
                    });

                    if (submenu.style.display === 'block') {
                        submenu.style.display = 'none';
                        if (icon) icon.classList.remove('section-rotate');
                    } else {
                        submenu.style.display = 'block';
                        if (icon) icon.classList.add('section-rotate');
                    }
                }

                event.preventDefault();
            });
        });

        submenus.forEach(submenu => {
            submenu.addEventListener('mouseleave', function () {
                this.style.display = 'none';
                const icon = this.previousElementSibling.querySelector('.fa');
                if (icon) {
                    icon.classList.remove('section-rotate');
                }
            });
        });
    }

    // Segundo bloque (menú alternativo)
    const menuToggleAlt = document.querySelector('.menu-toggle');
    const closeMenuAlt = document.querySelector('.close-menu');
    const menuAlt = document.querySelector('.menu');
    const submenuTogglesAlt = document.querySelectorAll('.menu > li > a');
    const submenusAlt = document.querySelectorAll('.submenu');  // Seleccionamos todos los submenús

    // Verificar si los elementos existen antes de agregar eventos
    if (menuToggleAlt && closeMenuAlt && menuAlt) {
        menuToggleAlt.addEventListener('mouseover', () => {
            menuAlt.classList.add('show');
        });

        closeMenuAlt.addEventListener('mouseout', () => {
            menuAlt.classList.remove('show');
        });

        // Rotar icono y mostrar/ocultar submenú
        submenuTogglesAlt.forEach(toggle => {
            toggle.addEventListener('mouseover', function (event) {
                const submenu = this.nextElementSibling;
                const icon = this.querySelector('.fa');

                // Cerrar todos los submenús y restaurar iconos
                submenusAlt.forEach(sm => {
                    if (sm !== submenu) {
                        sm.style.display = 'none';
                        const otherIcon = sm.previousElementSibling.querySelector('.fa');
                        if (otherIcon) {
                            otherIcon.classList.remove('rotate');
                        }
                    }
                });

                // Rota el icono y alternar el submenu actual
                if (submenu.style.display === 'block') {
                    submenu.style.display = 'none';
                    icon.classList.remove('rotate');
                } else {
                    submenu.style.display = 'block';
                    icon.classList.add('rotate');
                }

                event.preventDefault();
            });
        });

        // Evento del sub menu cuando se sale de este
        submenusAlt.forEach(submenu => {
            submenu.addEventListener('mouseleave', function () {
                this.style.display = 'none';  // Cierra el submenú cuando el mouse salga
                const icon = this.previousElementSibling.querySelector('.fa');
                if (icon) {
                    icon.classList.remove('rotate');
                }
            });
        });
    }
});


/////////////////////////////////////////////////////////// seccion////////////////////////////////////////////////////






const acordeon = document.querySelectorAll('.acordeon');
const boton = document.querySelectorAll('.desplegable ');


const flecha = document.querySelectorAll('.desplegable .icon-arrow');
const text = document.querySelectorAll('.desplegable  h3')

boton.forEach((e,i)=>e.addEventListener('click',function () {

    if (acordeon[i].style.maxHeight === '0px' || acordeon[i].style.maxHeight ==='') {
     acordeon.forEach(item=>item.style.maxHeight='0px')
      acordeon[i].style.maxHeight = '130px';  // todos estan en 0 asi que cierra de nueevo y abre el que quieras


     flecha.forEach(a => {a.style.transform = 'rotate(360deg)';a.style.color = 'var(--color-rojo)';});
      flecha[i].style.transform='rotate(180deg)'
      flecha[i].style.color='var(--color-blanco)'
      flecha[i].style.transition='all .5s' // PARA LA FLECHA MUEVE ARRIBA Y ABAJO POCO A POCO
      text.forEach(u=>u.style.color='var(--color-rojo)')
      text[i].style.color='var(--color-blanco)'

    } else {
      acordeon[i].style.maxHeight = '0px';  // Si ya está abierto, lo cierra
      flecha[i].style.transform='rotate(360deg)'
      flecha[i].style.color='var(--color-rojo)'
      text[i].style.color='var(--color-rojo)'
    }
}))



///////////////////////////////////////////////////////animado//////////////////////////////////////////////////




$(document).ready(function () { 
        // $(document).ready() asegura que el código se ejecute solo cuando el DOM esté completamente cargado,
        // es decir, después de que el HTML esté listo, pero antes de que se carguen las imágenes o recursos externos.

        // Ejecutamos la lógica para cada sección inmediatamente al cargar la página
        $('.animado').each(function () {
            // .each() recorre todos los elementos con la clase 'principal-box'.
            // Es como un "for" pero para jQuery.

            if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
                // $(this).offset().top obtiene la posición vertical (top) del elemento respecto al documento.
                // $(window).scrollTop() obtiene la distancia desde el borde superior de la ventana hasta el punto donde se encuentra el scroll.
                // $(window).height() obtiene la altura de la ventana del navegador.
                // Si la posición superior del elemento es menor que la posición del scroll + la altura de la ventana,
                // significa que el elemento es visible o ya ha pasado por la ventana de visualización.

                $(this).addClass('active');
                // Si la condición es verdadera (el elemento es visible en la ventana),
                // se agrega la clase 'active' al elemento.
                // Esta clase activa un efecto visual desde el CSS (como la transición o la animación).
            }
        });

        // Luego, escuchamos el evento scroll como antes
        $(window).on('scroll', function () {
            // $(window).on('scroll') detecta cuando el usuario hace scroll en la página.
            // Cada vez que el usuario desplaza la página, se ejecuta la función.

            $('.animado').each(function () {
                // Al igual que antes, recorremos todos los elementos con la clase 'principal-box'.

                if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
                    // Verificamos si el elemento es visible en la ventana (como ya explicamos antes).

                    $(this).addClass('active');
                    // Si el elemento es visible en la ventana, le agregamos la clase 'active'.
                    // Esto activa la animación o el estilo definido en el CSS.
                }
            });
        });
    });


////////////////////////////////////////////// boton para ir arriba/////////////////////////////////////////



$(".boton-arriba").fadeOut();
  $(document).scroll(function(){
      if($(document).scrollTop()>100){
        $(".boton-arriba").fadeIn(1000);
      }else if($(document).scrollTop()==0){
        $(".boton-arriba").fadeOut(1000)
      };
  });
  

  $(".boton-arriba").click(function(){
      $("html").animate({scrollTop:0},500);
  });