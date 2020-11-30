let borrarCard = (value) =>{
    document.getElementById(value).style.display='none'
    
}

let renderDatosJson = () => {
    fetch('data/datos.json')
      .then(response => response.json())
      .then(data => {

          let contenido = document.querySelector("div.Main")
          for (let value of data){
              let container = document.createElement("div")
              container.setAttribute("class","card")
              container.setAttribute("id",value.Matricula)

              let eliminarCard = document.createElement("button")
              eliminarCard.addEventListener("click", function(){borrarCard(value.Matricula)})
              eliminarCard.textContent = 'Eliminar'
              
              let datosNombre = document.createElement("div")
              datosNombre.setAttribute("class","datosNombre")

              let datosDetalle = document.createElement("div")
              datosDetalle.setAttribute("class","datosDetalle")
              
              let nombre = document.createElement("h2")
              nombre.textContent = value.Nombre + ' ' + value.Apellido
              datosNombre.appendChild(nombre)

              let matricula = document.createElement("p")
              matricula.textContent = '# '+value.Matricula
              datosDetalle.appendChild(matricula)

              let materia = document.createElement("p")
              materia.textContent = value.Materia +'-'+ value.añoRegistro +'-'+ value.Promedio
              datosDetalle.appendChild(materia)
              materia.setAttribute("id","materia")

              container.appendChild(eliminarCard)
              container.appendChild(datosNombre)
              container.appendChild(datosDetalle)
              contenido.appendChild(container)
          }
      })
      
      .catch( (error) => {
  
        console.log("Error ",error)
    
      })
  }

  document.addEventListener('DOMContentLoaded', function() {
    renderDatosJson();
  })