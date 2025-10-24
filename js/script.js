
////////////////////        HEADER     ///////////////////////////

//////////////////////////////////////////
        //    * MENU *    //
$(document).ready(function(){
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
});
        // Menú ordenador (Inyección)
$(document).ready(function(){
    $("#nav-container-pc").html(`
        <nav class="main-menu-pc">
            <ul class="list-menu-pc">
                <li class="li-despliegue">
                    <a class="submenu-item-pc">
                        Kung Fu
                        <i class="fa-solid fa-sort-down down"></i>
                    </a>
                    <ul class="despliegue-secundario">
                        <li><a href="historia-kungfu.html">Historia</a></li>
                        <li><a href="estilos-kungfu.html">Estilos</a></li>
                        <li><a href="escuela-kungfu.html">Escuela</a></li>
                    </ul>
                </li>
                <li><a href="taichi.html">Tai Chi</a></li>
                <li><a href="defensa-personal.html">Defensa&nbsp;Personal</a></li>
                <li class="li-despliegue">
                    <a class="submenu-item-pc">
                        Medios
                        <i class="fa-solid fa-sort-down down"></i>
                    </a>
                    <ul class="despliegue-secundario">
                        <li><a href="galeria.html">Galeria</a></li>
                        <li><a href="https://www.youtube.com/@asociacionta-mo3564">Video</a></li>
                    </ul>
                </li>
            </ul>
        </nav>`
    );
});

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

/////////////////////////////////////////////////////////////////////
//Para MOSTRAR y OCULTAR los textos adicionales con botones leerMas

$(document).ready(function () {
    const $texto_mas = $(".texto_mas");
    const $boton_leer_mas = $(".leer_mas, .leer_mas2");
    const $flecha_dos = $(".leer_mas .fa-caret-down, .leer_mas2 .fa-caret-down");

    $boton_leer_mas.each(function (i) {
        $(this).on("click", function () {
            if ($texto_mas.eq(i).css("max-height") === "0px" || $texto_mas.eq(i).css("max-height") === "none") {
                // Cierra todos
                $texto_mas.css("max-height", "0px");
                $(this).text("Ocultar");
                // Abre el actual
                $texto_mas.eq(i).css({
                    "max-height": "4500px",
                    "transition": "max-height 1s ease"
                });
                // Rotar todas las flechas a posición inicial
                $flecha_dos.css("transform", "rotate(360deg)");
                // Rotar la flecha del actual
                $flecha_dos.eq(i).css({
                    "transform": "rotate(180deg)",
                    "transition": "all 0.5s"
                });
            } else {
                // Si ya está abierto, lo cierra
                $texto_mas.eq(i).css("max-height", "0px");
                $(this).text("Leer más");
                $flecha_dos.eq(i).css("transform", "rotate(360deg)");
            }
        });
    });
});

///////////////////////////////////////////////////
//////////////////////////////////////////
    //    * SECCIONES con acordeon *    //
$(document).ready(function() {
    const acordeon = $('.acordeon, .acordeon-benf');
    const boton = $('.desplegable, .desp-benf');
    const flecha = $('.desplegable .icon-arrow, .desp-benf .icon-arrow');
    const text = $('.desplegable h3, .desp-benf h3');

    boton.each(function(i) {
        $(this).on('click', function() {
            if (acordeon.eq(i).css('max-height') === '0px' || acordeon.eq(i).css('max-height') === 'none') {
                
                // Cierra todos
                acordeon.css('max-height', '0px');
                // Abre el seleccionado
                acordeon.eq(i).css('max-height', 'fit-content');
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
///////////////////////////////////////////////////////////////
///////////////////////////////////////////
/////////////// ESTILOS DE KUNG FU 
////////// REDIMENSION DE LA Imagen DEL DIAGRAMA //////////
function cambiarImagen() {
    const $imagen = $("#imagenEsquema");
    const $botones = $(".botonStyle, .botonStylePequeno");

    // Ocultar con animación de opacidad
    $imagen.css("opacity", 0);

    // Cambiar la imagen después de un pequeño retraso
    setTimeout(function () {
        if (window.matchMedia("(min-width: 600px)").matches) {
            $imagen.attr("src", "./img/estilos/esquemaPc.webp").css("min-width", "100%");
        } else {
            $imagen.attr("src", "./img/estilos/esquemaMovil.webp").css("min-width", "350px");
        }

        // Mostrar de nuevo
        $imagen.css("opacity", 1);
    }, 300);

    // Ajustar tamaño de botones según el ancho de la imagen
    const imagenWidth = $imagen.width();
    $botones.each(function () {
        const paddingHorizontal = imagenWidth * 0.01;
        const paddingVertical = imagenWidth * 0.0122;
        const fontSize = imagenWidth * 0.02;

        $(this).css({
            "padding": `${paddingVertical}px ${paddingHorizontal}px`,
            "font-size": `${fontSize}px`
        });
    });
}
    // Llamada inicial y en resize
cambiarImagen();
$(window).on("resize", cambiarImagen);
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////// SLIDER TAICHI.HTML
$(document).ready(function(){
    const $items = $('.slider-nucleo li');
    let currentIndex = 0;
    let intervalo_slider = null;
    function showImage(index) {
        $items.stop(true, true).fadeOut(300);
        return $items.eq(index).stop(true, true).fadeIn(300);
    }
    function imgSig() {
        currentIndex = (currentIndex + 1) % $items.length;
        return showImage(currentIndex);
    }
    function imgAnt() {
        currentIndex = (currentIndex - 1 + $items.length) % $items.length;
        return showImage(currentIndex);
    }
    $('.btn-taichi.sldr-next').click(function(){
        imgSig();
    });
    $('.btn-taichi.sldr-before').click(function(){
        imgAnt();
    });
    function startSlider(){
        if (!intervalo_slider) {
            return intervalo_slider = setInterval(imgSig, 3000);
        }
    }
    function stopSlider(){
        if (intervalo_slider) {
            clearInterval(intervalo_slider);
            return intervalo_slider = null;
        }
    }
    // Inicializar mostrando solo la primera imágen
    $items.hide().eq(currentIndex).show();

    startSlider();
    $('.btn-taichi, #sliderTaichi-container').hover(stopSlider, startSlider);
});

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
    $(".boton-arriba").click(function(){
        $("html").animate({scrollTop:0},
    500);
});

//////////////////////////////////////////
//////////////////////////////////////////