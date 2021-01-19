
import './App.css';
import React,{useState, useEffect} from 'react'
import { parse } from 'fast-xml-parser'
function App() {
  const [DataLibros,setDataLibros] = useState([])
  const [categorias, setCategorias] = useState([]);

  const getData = () => {
    fetch('https://dataserverdaw.herokuapp.com/libros/categoria')
        .then((response) => {
            console.log(response)
            return response.json();
        })
        .then((textResponse) => {
            console.log('response is ', textResponse)
            setCategorias(textResponse.categories)
        })
        .catch((error) => {
            console.log(error);
        });
}
  const fetchXML = () => {
    fetch('https://dataserverdaw.herokuapp.com/libros/xml')
    .then((response) => response.text())
    .then((textResponse) => {

        let objs = parse(textResponse);
        let libros = objs.bookstore.book
        setDataLibros(libros)
        
    })
    .catch((error) => {
        console.log(error);
    });
  }

  useEffect(() => {
    fetchXML();
    getData();
  });
  
  const listToText = (e) =>{
      let resultado = ""
      if (e.length>1){
        let count = 0;
        for(let texto of e){
          resultado = resultado + texto
          if (count !== e.length){
            resultado = resultado+', '
          }

        }
        return resultado
      }
      else{return e}
      
  }

  const renderLibros = DataLibros.map((libro,index)=>{
    let titulo = libro.title
    let autores = libro.authors.book
    let isbn = libro.isbn
    let categorias = libro.categories.book
      return(
        <div className = "Card" key={index}>
          <h3>{titulo}</h3>
          <p>autores:{listToText(autores)}</p>
          <p>isbn: {isbn}</p>
          <p>categories:</p>
        </div>

      )
      
  })
  return (
    <div className="App">
      <div className="combobox">
        <h3>Categorias:</h3>
        <select>
          {categorias.map((categoria)=>{
            return(
              <option value={categoria.category}>{categoria.category}</option>
            )
          })}
          
        </select>
      </div>
      <div className="Libros">
          {renderLibros}
      </div>
    </div>
  );
}





export default App;
