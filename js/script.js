
////////////////////        HEADER     ///////////////////////////




//////////////////////////////////////////
        //    * MENU *    //

// Toggle menú principal
$('.bars, .times').click(function() {
  $('.main-menu').toggleClass('open');
});

            // Submenús
$('.submenu-item').click(function() {
  const arrow = $(this).find('.down');
  const submenu = $(this).next('.sub');

  arrow.toggleClass('rotated');
  submenu.toggleClass('open');
});
            // Menú ordenador (Inyección)
$("#nav-container-pc").html(`
<nav class="main-menu-pc">
    <ul class="list-menu-pc">
        <li><a href="index.html">Inicio</a></li>
        <li class="li-despliegue">
            <a href="kungfu.html" class="submenu-item-pc">
                Kung-Fu
                <i class="fa-solid fa-sort-down down"></i>
            </a>
            <ul class="despliegue-secundario">
                <li><a href="historia.html">Historia</a></li>
                <li><a href="estilos.html">Estilos</a></li>
                <li><a href="escuela.html">Escuela</a></li>
            </ul>
        </li>
        <li><a href="taichi.html">Taichi</a></li>
        <li><a href="defensa.html">Defensa&nbsp;personal</a></li>
        <li class="li-despliegue">
            <a href="medios.html" class="submenu-item-pc">
                Medios
                <i class="fa-solid fa-sort-down down"></i>
            </a>
            <ul class="despliegue-secundario">
                <li><a href="galeria.html">Galeria</a></li>
                <li><a href="video.html">Video</a></li>
                <li><a href="descarga.html">Descargas</a></li>
            </ul>
        </li>
    </ul>
</nav>
`);

            // Submenús

$(document).ready(function(){
    // Seleccionamos cada elemento de la lista que tiene un submenú
    $('.li-despliegue').hover(
        // Función que se ejecuta cuando el ratón ENTRA en el elemento
        function() {
            // 'this' se refiere al '.li-despliegue' sobre el que está el cursor
            // Buscamos el submenú y la flecha dentro de él y les añadimos una clase
            $(this).find('.despliegue-secundario').addClass('open');
            $(this).find('.down').addClass('rotated');
        },
        // Función que se ejecuta cuando el ratón SALE del elemento
        function() {
            // Hacemos lo contrario: quitamos las clases
            $(this).find('.despliegue-secundario').removeClass('open');
            $(this).find('.down').removeClass('rotated');
        }
    );
});
//////////////////////////////////////////
//////////////////////////////////////////
        //    * SECCION *    //
$(document).ready(function() {
    const acordeon = $('.acordeon');
    const boton = $('.desplegable');
    const flecha = $('.desplegable .icon-arrow');
    const text = $('.desplegable h3');

    boton.each(function(i) {
        $(this).on('click', function() {
            if (acordeon.eq(i).css('max-height') === '0px' || acordeon.eq(i).css('max-height') === 'none') {
                
                // Cierra todos
                acordeon.css('max-height', '0px');

                // Abre el seleccionado
                acordeon.eq(i).css('max-height', '130px');

                // Flechas
                flecha.css({
                    'transform': 'rotate(360deg)',
                    'color': 'var(--color-rojo)'
                });

                flecha.eq(i).css({
                    'transform': 'rotate(180deg)',
                    'color': 'var(--color-blanco)',
                    'transition': 'all .5s'
                });

                // Textos
                text.css('color', 'var(--color-rojo)');
                text.eq(i).css('color', 'var(--color-blanco)');
            } else {
                // Cierra el abierto
                acordeon.eq(i).css('max-height', '0px');

                // Flechas
                flecha.eq(i).css({
                    'transform': 'rotate(360deg)',
                    'color': 'var(--color-rojo)'
                });

                // Texto
                text.eq(i).css('color', 'var(--color-rojo)');
            }
        });
    });
});

//////////////////////////////////////////
//////////////////////////////////////////
        //    * ANIMADO *    //

$(document).ready(function () { 
/* $(document).ready() asegura que el código se ejecute solo cuando el DOM esté completamente cargado, 
es decir, después de que el HTML esté listo, pero antes de que se carguen las imágenes o recursos externos.*/

// Ejecutamos la lógica para cada sección inmediatamente al cargar la página
$('.animado').each(function () {
    // .each() recorre todos los elementos con la clase 'principal-box'.
    // Es como un "for" pero para jQuery.

    if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
        // $(this).offset().top obtiene la posición vertical (top) del elemento respecto al documento.
        // $(window).scrollTop() obtiene la distancia desde el borde superior de la ventana hasta el punto donde se encuentra el scroll.
        // $(window).height() obtiene la altura de la ventana del navegador.
        /* Si la posición superior del elemento es menor que la posición del scroll + la altura de la ventana,
         significa que el elemento es visible o ya ha pasado por la ventana de visualización.*/

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
//////////////////////////////////////////
//////////////////////////////////////////
        //    * BOTON ARRIBA *    //

$(".boton-arriba").fadeOut();
  $(document).scroll(function(){
      if($(document).scrollTop()>100){
        $(".boton-arriba").fadeIn(1000);
      }else if($(document).scrollTop()==0){
        $(".boton-arriba").fadeOut(1000)
      };
  });
j
  $(".boton-arriba").click(function(){
      $("html").animate({scrollTop:0},500);
  });
//////////////////////////////////////////












  //////////////////////////////////////////
        //    * BOTON ARRIBA *    //