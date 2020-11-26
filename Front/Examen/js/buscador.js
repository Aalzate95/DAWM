
let buscar=()=>{
  try{
    let palabra = document.getElementById('myInput').value
    let cards =document.getElementsByClassName('card');

    for (let card of cards){
        if(card.children[1].children[0].textContent.toLowerCase().includes(palabra.toLowerCase()) ){ card.style.display="";}
        else{card.style.display="none";}
    }
  }catch (error) {
    console.log("Error ",error)
  }
}


