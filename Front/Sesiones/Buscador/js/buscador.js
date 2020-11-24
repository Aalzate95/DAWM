//Instrucciones

/* 
1. Luego de la carga completa de la página, 
carga los datos que se encuentran en datos.xml 
y colócalos en una tabla con la siguiente estructura

  =============================
  | Nombre | Apellido | Ciudad|
  =============================
  | ...    |  ...     | ...   |

  Dicha tabla irá dentro del div#datos
*/


/*
2. Al ingresar una letra en el input#myInput debe filtrar
el contenido de la tabla, mostrando únicamente las filas que
contengan el texto ingresado.

*/
let renderDatosJson = () => {
  fetch('data/usuarios.json')
    .then(response => response.json())
    .then(data => {
      let table = document.querySelector("table#myTable")
      
      for (let persona of data.users){
        let tr = document.createElement("tr")

        let nombre = persona.name.split(" ")
        
        let td1 = document.createElement("td")
        td1.textContent = nombre[0]
        tr.appendChild(td1)

        let td2 = document.createElement("td")
        td2.textContent = nombre[1]
        tr.appendChild(td2)

        let td3 = document.createElement("td")
        td3.textContent = persona.city
        tr.appendChild(td3)

        table.appendChild(tr)
      }
    })
    
    .catch( (error) => {

      console.log("Error ",error)
  
    })
}


let renderDatosXML = () => {
  
  // DESDE AQUI EMPIEZA LA SOLUCION ANTERIOR

  fetch('data/datos.xml')
  .then( (resultado) => {
    return resultado.text() 
  })
  .then( (str) => {
    
    let parser = new DOMParser()
    let xml = parser.parseFromString(str, "text/xml");
    let table = document.createElement("table")
    table.setAttribute("id","myTable");
    let personas = xml.getElementsByTagName("persona")
    // head
    let tr = document.createElement("tr")
    

    titles = ["Nombre","Apellido","Ciudad"]
    for (let title of titles){
      let th = document.createElement("th")
      th.textContent = title
      tr.appendChild(th)
      table.appendChild(tr)
    }
    for (let persona of personas){
      let thNombre = persona.getElementsByTagName('nombre')
      let thApellido = persona.getElementsByTagName('apellido')
      let thCiudad = persona.getElementsByTagName('ciudad')
      let tr = document.createElement("tr")
      
     
      for (let nombre of thNombre){
        
        let td = document.createElement("td")
        td.textContent = nombre.textContent
        tr.appendChild(td)
        table.appendChild(tr)
      }

      for (let apellido of thApellido){
        let td = document.createElement("td")
        td.textContent = apellido.textContent
        tr.appendChild(td)
        table.appendChild(tr)
      }

      for (let ciudad of thCiudad){
        let td = document.createElement("td")
        td.textContent = ciudad.textContent
        tr.appendChild(td)
        table.appendChild(tr)
      }
      
  }

  document.getElementById('datos').appendChild(table);
  renderDatosJson()
})
  .catch( (error) => {

    console.log("Error ",error)

  })

}
let orderBy = () =>{
  let nombre = document.getElementById("OBnombre").checked
  let ciudad = document.getElementById("OBciudad").checked
  if (nombre == true){return 0}
  else if(ciudad == true){return 2}
  else{return null}
  
}

let buscar = () =>{
  try {
    let palabra = document.getElementById('myInput').value
    let filtro = palabra.toUpperCase();
    let table = document.getElementById("myTable");
    let order = orderBy()
    let tr;
    if ( table !=  null){
      let tr = table.getElementsByTagName("tr")
      for (let row = 0; row< tr.length; row++){
        td = tr[row].getElementsByTagName("td")[order];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filtro) > -1) {
            tr[row].style.display = "";
          } else {
            tr[row].style.display = "none";
          }
        }
    }
  }

  } catch (error) {
    console.log("Error ",error)
  }
  }
//Las funciones se ejecutarán en cuanto el documento esté completamente cargado.
document.addEventListener('DOMContentLoaded', function() {
  renderDatosXML();
  buscar();
  renderDatosJson();
})