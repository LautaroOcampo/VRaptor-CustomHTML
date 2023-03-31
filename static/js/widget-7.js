(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://www.estudioindexwip.com.ar/vraptor/favicon.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  })();
  function faviconIn(){
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';link.rel = 'shortcut icon';
    link.href = 'https://www.estudioindexwip.com.ar/vraptor/favicon.png';
    document.getElementsByTagName('head')[0].appendChild(link)
  };
  
  setTimeout(faviconIn,1000);

var url = window.location.pathname;
url.split('/')[1];
if (url == '/') {
    function Home(){
        document.getElementsByTagName('body')[0].classList.add('customPage');

        document.getElementById('indexDiv').innerHTML =`
           <section class="talles">
                <h2>Tabla de talles</h2>
                <div class="talles_container">
                    <img src="https://www.estudioindexwip.com.ar/vraptor/banner-desktop2.jpg" alt="" class="desktop">
                    <img src="https://www.estudioindexwip.com.ar/vraptor/banner-mobile2.jpg" alt="" class="mobile">
                </div>
           </section>
           <section class="categorias_destacadas">
                <div class="categorias_container">
                    <h2>Categorías</h2>
                    <div class="top_categorias">
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/bebes" class="bebes"><span>Bebés</span></a>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/sin-genero" class="ninos"><span>Niños</span></a>
                    </div>
                    <div class="bottom_categorias">
                        <a href="#"><img src="https://www.estudioindexwip.com.ar/vraptor/accesorios.png" alt=""></a>
                    <div>
                </div>
           </section>
           <section class="temporadas">
                <div class="temporadas_container">
                    <h2>Temporadas</h2>
                    <div class="top_temporadas">
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/otono-invierno"><img src="https://iili.io/HOHxkZl.jpg" alt=""></a>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/primavera-verano"><img src="https://www.estudioindexwip.com.ar/vraptor/verano.jpg" alt=""></a>
                    </div>
                    <div class="bottom_temporadas">
                        <a href="/materiales"><img src="https://www.estudioindexwip.com.ar/vraptor/bannerestampados.jpg" alt=""></a>
                    <div>
                </div>
           </section>
           <section class="colores">
                <div class="colores_container">
                    <h2>¿Cuál es tu color favorito hoy?</h2>
                    <div>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/_Color-Principal_Blanco"><div id="blanco"></div></a>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/_Color-Principal_Rosa"><div id="rosa"></div></a>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/_Color-Principal_Celeste"><div id="celeste"></div></a>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/_Color-Principal_Gris-claro"><div id="gris"></div></a>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/_Color-Principal_Verde"><div id="verde"></div></a>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/_Color-Principal_Marrón"><div id="marron"></div></a>
                    </div>
                </div>   
           </section>
           <section class="estampados">
                <div class="estampados_container">
                    <h2>Nuestros estampados</h2>
                    <ol class="slickIndex">
                        <li>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/bunny-rosa">
                            <div class="circle">
                                <img src="https://www.estudioindexwip.com.ar/vraptor/bunnyrosa.jpeg" alt="" class="carousel-img">
                            </div>
                            <span>Comprar</span>
                        </a>
                        <h3>Bunny Rosa</h3>
                        </li>
                        <li>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/rayado-rosa">
                            <div class="circle">
                                <img src="https://www.estudioindexwip.com.ar/vraptor/rayarosa.jpeg" alt="" class="carousel-img">
                            </div>
                            <span>Comprar</span>
                        </a>
                        <h3>Rayado Rosa</h3>
                        </li>
                        <li>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/rayado-gris">
                            <div class="circle">
                                <img src="https://www.estudioindexwip.com.ar/vraptor/rayagris.jpeg" alt="" class="carousel-img">
                            </div>
                            <span>Comprar</span>
                        </a>
                        <h3>Rayado Gris</h3>
                        </li>
                        <li>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/dino">
                            <div class="circle">
                                <img src="https://www.estudioindexwip.com.ar/vraptor/dino.jpeg" alt="" class="carousel-img">
                            </div>
                            <span>Comprar</span>
                        </a>
                        <h3>Dino</h3>
                        </li>
                        <li>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/woodland">
                            <div class="circle">
                                <img src="https://www.estudioindexwip.com.ar/vraptor/woodland.jpeg" alt="" class="carousel-img">
                            </div>
                            <span>Comprar</span>
                        </a>
                        <h3>Woodland</h3>
                        </li>
                        <li>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/print">
                            <div class="circle">
                                <img src="https://www.estudioindexwip.com.ar/vraptor/print.jpeg" alt="" class="carousel-img">
                            </div>
                            <span>Comprar</span>
                        </a>
                        <h3>Print</h3>
                        </li>
                        <li>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/rabbit">
                            <div class="circle">
                                <img src="https://www.estudioindexwip.com.ar/vraptor/rabbit.jpeg" alt="" class="carousel-img">
                            </div>
                            <span>Comprar</span>
                        </a>
                        <h3>Rabbit</h3>
                        </li>
                        <li>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/rex">
                            <div class="circle">
                                <img src="https://www.estudioindexwip.com.ar/vraptor/rex.jpeg" alt="" class="carousel-img">
                            </div>
                            <span>Comprar</span>
                        </a>
                        <h3>Rex</h3>
                        </li>
                        <li>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/aruba">
                            <div class="circle">
                                <img src="https://www.estudioindexwip.com.ar/vraptor/aruba.jpeg" alt="" class="carousel-img">
                            </div>
                            <span>Comprar</span>
                        </a>
                        <h3>Aruba</h3>
                        </li>
                        <li>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/baby-shark">
                            <div class="circle">
                                <img src="https://www.estudioindexwip.com.ar/vraptor/babysharkrayado.jpeg" alt="" class="carousel-img">
                            </div>
                            <span>Comprar</span>
                        </a>
                        <h3>Baby shark</h3>
                        </li>
                        <li>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/zazu">
                            <div class="circle">
                                <img src="https://www.estudioindexwip.com.ar/vraptor/zazu.jpeg" alt="" class="carousel-img">
                            </div>
                            <span>Comprar</span>
                        </a>
                        <h3>Zazu</h3>
                        </li>
                        <li>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/safari">
                            <div class="circle">
                                <img src="https://www.estudioindexwip.com.ar/vraptor/safari.jpeg" alt="" class="carousel-img">
                            </div>
                            <span>Comprar</span>
                        </a>
                        <h3>Safari</h3>
                        </li>
                        <li>
                        <a href="/ropa/ropa-interior-y-de-dormir/ropa-de-dormir/pijamas/rayado-celeste">
                            <div class="circle">
                                <img src="https://www.estudioindexwip.com.ar/vraptor/rayadoceleste.jpeg" alt="" class="carousel-img">
                            </div>
                            <span>Comprar</span>
                        </a>
                        <h3>Rayado Celeste</h3>
                        </li>
                    </ol>
                </div>
           </section>
           <section class="instagram">
                <h2> Seguinos en instagram</h2>
                <iframe src="https://cdn.lightwidget.com/widgets/4f54dc5fade65ec0ab381895945de7de.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>           </section>
        `;
        var secondImage = document.getElementsByClassName("ui-item");
        for (var i = 0; i < secondImage.length; i++) {
            var href = secondImage.item(i);
            var id_producto = href.getAttribute('href').split('-')[1];
            var agregarClase = 'class' + id_producto;
            var agregarClaseImg = '.'+agregarClase;
            secondImage.item(i).classList.add(agregarClase);
            get2ndImg(id_producto,agregarClaseImg);
        }
        function get2ndImg(id_producto,agregarClaseImg){
            var urlVip = 'https://api.mercadolibre.com/items?ids=MLA'+id_producto+'#json';
                fetch(urlVip)
                .then(response => response.json())
                .then(data => {
                    var pictures2nd = data[0].body.pictures[1].secure_url;
                    $(agregarClaseImg).find('.ui-item__image-container').append(`<img class="picture2nd" src="${pictures2nd}">`);
            }); 
        }
    }
    
    function Slick(){
        $('.slickIndex').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            centerMode: true,
            responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                centerMode: false,
              }
            }
            ]
        });
    }

    setTimeout(Slick,1000)
    setTimeout(Home,500)
}else if (url =='/materiales'){

    document.getElementsByTagName('body')[0].classList.add('customPage2');

    function materiales(){
      document.getElementById('indexDiv').innerHTML = `
        <img src="https://www.estudioindexwip.com.ar/vraptor/banner.jpg" alt="" class="banner">
        <section class="materiales">
            <div class="materiales_container">
                <div class="texto">
                <img src="https://www.estudioindexwip.com.ar/vraptor/materiasprimastit.png" alt="" class="img_title">
                    <p>V-Raptor es una marca creada en familia. Surge de un proyecto soñado, pensado y desarrollado desde cero, inspirada en nuestros dos hijos. El proyecto fue desarrollado íntegramente en Argentina y está pensado para las 4 estaciones del año, sin importar en qué lugar del país o del mundo estes. Nuestro objetivo es que siempre tengas los pijamas más suaves y cómodos para el uso diario con estampados que a tus hijos les van a encantar.</p>
                    <p>Sabemos la importancia del sueño en sus primeros años; que los niños estén cómodos a la hora dormir es nuestra prioridad. Pensado para ellos y para vos. ¡Esperamos que los disfruten tanto como nosotros!</p>
                    <p>El pijama es la prenda que todos elegimos para estar en nuestra casa, para sentirnos cómodos y disfrutar de los descansos. En este caso cada detalle fue pensado para la comodidad de los niños.</p>
                    <p>La suavidad de la tela fue nuestra prioridad, las costuras en los cuellos fueron cubiertas por una cintas suave que fue ideada para no generar molestias ni picazón. Quisimos un pijama con terminación premium haciendo que nada le pinche o le moleste a los niños a la hora de su descanso.</p>
                    <p>En el caso de los Ositos utilizamos los mejores cierres que podes encontrar en el mercado mundial YKK, con esto nos aseguramos no solo darle un acabado de calidad sino garantizarle al cliente que nunca va a tener problemas con el cierre.</p>
                    <p>Nuestra tela al tener un porcentaje de elastano hace que ponerle el pijama a los chicos sea super fácil ya que la tela cede fácilmente y regresa a su forma original sin deformarse. También le da libertad de movimiento a los niños en su día a día ya que la prenda es elastizada.</p>
                    <p>Nuestras estampas están hechas mediante estampa digital. No usa papel, no usa agua, no hay desechos, por eso es ecofriendly. Este tipo de estampado permite que la estampa tenga mayor durabilidad lavado tras lavado.</p>
                    <p>Pensado para ellos y para vos, salí a la vida en pijamas. Usalos como quieras, cuándo quieras, dónde quieras.</p>
                    <p>Pijamas y algo más... V-Raptor.</p>      
                </div>
                <div class="imagenes">
                    <div>
                        <img src="https://www.estudioindexwip.com.ar/vraptor/1.jpg" alt="">
                        <img src="https://www.estudioindexwip.com.ar/vraptor/2.jpg" alt="">
                        <img src="https://www.estudioindexwip.com.ar/vraptor/3.jpg" alt="">
                        <div>
                            <img src="https://www.estudioindexwip.com.ar/vraptor/eco.jpg" alt="">
                            <img src="https://www.estudioindexwip.com.ar/vraptor/IndArg.jpg" alt="">
                        </div>    
                    </div>
                </div>
            </div>
        </section>
      `;
    }
    setTimeout(materiales,1500);
} 

/* Mostrar 2nda imagen de productos en hover. Home y search */

$(document).on('mouseenter', '.ui-search-layout--grid .ui-search-link .slick-track', function (){
    let estilosTrack = this.getAttribute('style').split(';')[2].replace(" ", "");
    let estilos = this.querySelector('.slick-slide').getAttribute('style');
    let estilosSplit1 = estilos.split(';')[1];
    let estilosSplit2 = estilosSplit1.split(':')[1].replace(" ", "");
    let estilosToApply = 'opacity: 1; transform: translate3d(-'+estilosSplit2+', 0px, 0px);' + estilosTrack;
    this.style = estilosToApply; 
});
$(document).on('mouseleave', '.ui-search-layout--grid .ui-search-link .slick-track', function (){
    let estilosTrack = this.getAttribute('style').split(';')[2].replace(" ", "");
    let estilosToApply = 'opacity: 1; transform: translate3d(0px, 0px, 0px);' + estilosTrack;
    this.style = estilosToApply; 
});

$(document).on('click', '.mshops-recommendations-wrapper .carousel-with-tabs .carousel-with-tabs__tabs-list .tabs-list__item', function (){

    $('.ui-item').each(function (){
        if($(this).find('.picture2nd').length === 0){         
            var id_producto = $(this).attr('href').split('-')[1];
            var agregarClase = 'class' + id_producto;
            var agregarClaseImg = '.'+agregarClase;
            $(this).addClass(agregarClase);
            get2ndImg(id_producto,agregarClaseImg);
        } 
    });
    function get2ndImg(id_producto,agregarClaseImg){
        var urlVip = 'https://api.mercadolibre.com/items?ids=MLA'+id_producto+'#json';
            fetch(urlVip)
            .then(response => response.json())
            .then(data => {
                var pictures2nd = data[0].body.pictures[1].secure_url;
                $(agregarClaseImg).find('.ui-item__image-container').append(`<img class="picture2nd" src="${pictures2nd}">`);
        }); 
    }
});

$(document).on('click', '.mshops-recommendations-wrapper .next-button', function (){

    $('.ui-item').each(function (){
        if($(this).find('.picture2nd').length === 0){         
            var id_producto = $(this).attr('href').split('-')[1];
            var agregarClase = 'class' + id_producto;
            var agregarClaseImg = '.'+agregarClase;
            $(this).addClass(agregarClase);
            get2ndImg(id_producto,agregarClaseImg);
        } 
    });
    function get2ndImg(id_producto,agregarClaseImg){
        var urlVip = 'https://api.mercadolibre.com/items?ids=MLA'+id_producto+'#json';
            fetch(urlVip)
            .then(response => response.json())
            .then(data => {
                var pictures2nd = data[0].body.pictures[1].secure_url;
                $(agregarClaseImg).find('.ui-item__image-container').append(`<img class="picture2nd" src="${pictures2nd}">`);
        }); 
    }
});