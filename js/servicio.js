//Busqueda individual del servicio para mostrar el detalle//

function mostrarServicio() {
  const servicio = getServicioLS()
  let detalle = `<div class="col-md-6 offset-md-3 text-center">
  <img src="${servicio.imagen}" alt="${servicio.nombre}" class="img-fluid" />
  <p>${servicio.nombre}</p>
  <p>${servicio.tipo}</p>
  <p>${servicio.descripcion}</p>
  </div>`


document.getElementById("servicio").innerHTML = detalle;
}

mostrarServicio()

