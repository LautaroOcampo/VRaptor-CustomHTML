flechas = document.querySelectorAll(".flecha-ver-mas");
subcategorias = document.querySelectorAll(".subcategorias-custom");

flechas.forEach(function (value, i) {
    flechas[i].addEventListener("click", function(){
      subcategorias[i].classList.toggle("invisible");
      flechas[i].classList.toggle("rotacion");
    });
  });