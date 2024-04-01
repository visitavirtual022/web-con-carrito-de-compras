// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody'); //--> donde se van a agregar todos los cursos
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); //--> boton vaciar el carrito
const listaCursos = document.querySelector('#lista-cursos');
//creo la variable que va a ser el carrito de compras se irá llenando let
let articulosCarrito = [];  //--> inicia vacio

//crear una funcion donde se van a registrar todos los eventListener
cargarEventListener();
function cargarEventListener () {
  // Cuando agregas un curso presionando Agregar al Carrito
  listaCursos.addEventListener('click', agregarCurso);
}



// Seccion de las funciones
function agregarCurso (e) {     //--> event bubbling evitamos que se propague
  e.preventDefault();           //--> prevenir el efecto por defecto ya que se hace click en un enlace
  // console.log(e.target.classList);  //--> para verificar
  
  
  
  if(e.target.classList.contains('agregar-carrito')){
    // console.log(e.target.parentElement.parentElement);  -->  verificar que selecciono todo el card
    const cursoSeleccionado = e.target.parentElement.parentElement; // --> lo asigno a una varible
    leerDatosCurso(cursoSeleccionado)

  }
  
}

// Lee el contenido del html al que le dimos click y extrae la informacion del curso (video 117)
//Para eso hacemos un traversing
function leerDatosCurso(curso) {
 // console.log(curso)

  // crear un objeto con el contenido del curso actual (se verá en el carrito)
  const infoCurso = {
    imagen : curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  }

  // --> Agreaga articulos al array de carrito
  articulosCarrito = [...articulosCarrito, infoCurso];

  console.log (articulosCarrito);

  carritoHtml();  // --> Mando llamar la funcion despues de leer los datos del curso
}

// --> Muestra el carrito de compras en el html
function carritoHtml(){     //--> va a generar el htmml basado en este carrito de compras
  
  // --> Antes de crear el html hay que limpiar el html para evitar que se dupliquen los elementos del array
// --> para limpiar el html creo la funcion limpiarHtml (abajo)
  limpiarHtml();

  // --> Recorre el array carrito y genera el html
  articulosCarrito.forEach( (curso) => {
    const row = document.createElement('tr');   //--> de esta forma creo una tabla
    row.innerHTML = `
      <td>
        ${curso.titulo}
      </td>
      `;

    // --> Agrega el html del carrito en el tbody
    contenedorCarrito.appendChild(row);
  })
}

// --> Funcion para limpiar el html (eliminar loc cursos duplicados)
function limpiarHtml(){
  
  while(contenedorCarrito.firstChild){
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }  
}