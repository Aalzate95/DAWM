import './App.css';
import React, {useState, useEffect} from 'react';




const App = () => {
  const [dataTotal,setDataTotal] = useState({})
  const [distritos,setDistritos] = useState({})
  
  const loadData = async () =>{
    await fetch('http://localhost:8080/matricula')
    .then((res) =>{
      return res.json()
    })
    .then((textResponse)=>{
      setDataTotal(textResponse)
    })
    .catch((error) => {
        console.log(error);
    });
  }

  useEffect(()=>{
    loadData();
  },[])

  const cleanValues = (data) =>{
    let distritos = []

    Object.keys(data).forEach((e)=>{
      if (!distritos.includes(data[e]["DISTRITOS"])){
          distritos.push(data[e]["DISTRITO"]);
      }
    })
    setDistritos(distritos)
  }
  

  return ( 
    <div className="App">
        <div className="filtro">
          <label>Distritos:</label>
            <select>
              {Object.keys(dataTotal).map((e)=>{
                return(
                  <option key={dataTotal[e]["_id"]} value={dataTotal[e]["_id"]}>{dataTotal[e]["DISTRITO"]}</option>
                )
              })}
            </select>
            <label>Provincias:</label>
            <select>
              {Object.keys(dataTotal).map((e)=>{
                return(
                  <option key={dataTotal[e]["_id"]} value={dataTotal[e]["_id"]}>{dataTotal[e]["PROVINCIA"]}</option>
                )
              })}
            </select>
        </div>
        <div className="resultados">
              <p>resultados...</p>
        </div>
    </div>
   );
}
 
export default App;
