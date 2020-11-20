let cargarPorTipo = () => {

  //console.log("Cargando ... ");

  fetch('data/portipo.xml')
  .then( (resultado) => {
     //Transforma en texto
    return resultado.text()
  }) 
  .then( (str) => {
    //Transforma en objeto
    let parser = new DOMParser()
    let xml = parser.parseFromString(str, "text/xml");

    let caption = xml.getElementsByTagName('caption')[0]
    let captionText = caption.textContent;

    let table = document.createElement("table");
    let captionHTML = document.createElement("caption");

    captionHTML.innerText = captionText;
    table.appendChild(captionHTML);

    let recursos = xml.getElementsByTagName("recurso")

    for(let recurso of recursos) {
      
      let tr = document.createElement("tr")

      let th = document.createElement("th")
      let thText = recurso.getElementsByTagName('tipo')
      th.textContent = thText[0].textContent
      tr.appendChild(th)
      
      let td = document.createElement("td")
      let tdText = recurso.getElementsByTagName('cantidad')
      td.textContent = tdText[0].textContent
      tr.appendChild(td)

      table.appendChild(tr)
    }

    //Agregamos la tabla al nodo en el html
    document.getElementById('portipo').appendChild(table);
  })
  .catch( (error) => {

    console.log("Error ",error)

  })

}

let cargarPorFecha = () => {

  fetch('data/porfecha.xml')
  .then( (resultado) => {
    return resultado.text() 
  })
  .then( (str) => {
    
    let parser = new DOMParser()
    let xml = parser.parseFromString(str, "text/xml");

    // caption
    let caption = xml.getElementsByTagName('caption')[0]
    let captionText = caption.textContent;

    let table = document.createElement("table");
    let captionHTML = document.createElement("caption");

    captionHTML.innerText = captionText;
    table.appendChild(captionHTML);

    // head

    let tr = document.createElement("tr")
    let meses = xml.getElementsByTagName("mes")

    let th = document.createElement("th")
    tr.appendChild(th)

    for(let mes of meses) {
      let th = document.createElement("th")
      th.textContent = mes.textContent
      tr.appendChild(th)
    }

    table.appendChild(tr)

    // body

    let recursos = xml.getElementsByTagName("recurso")

    for(let recurso of recursos) {

      let tr = document.createElement("tr")

      let th = document.createElement("th")
      let thText = recurso.getElementsByTagName('nombre')
      th.textContent = thText[0].textContent
      tr.appendChild(th)
      
      let tdArray = recurso.getElementsByTagName('cantidad')
      for(let tdElement of tdArray) {
        let td = document.createElement("td")
        td.textContent = tdElement.textContent
        tr.appendChild(td)
      }

      table.appendChild(tr)
    }

    //Agregamos la tabla al nodo en el html
    document.getElementById('portipo').appendChild(table);
  })
  .catch( (error) => {

    console.log("Error ",error)

  })

}

//Las funciones se ejecutarán en cuanto el documento esté completamente cargado.
document.addEventListener('DOMContentLoaded', function() {
  cargarPorTipo();
  cargarPorFecha();
})