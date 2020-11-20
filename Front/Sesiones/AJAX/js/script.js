let chatStyle = () => {

  /* Selecciona el nodo con el id "texto-chat" 
   con el método document.getElementById( ) 
   agrega la clase 'h6' con el atributo className 
  */
  
  let nodo = document.getElementById("texto-chat")
  nodo.className = 'h6'


  /* Selecciona el nodo con el id "chat" 
  con el método document.getElementById( ) 
  Utiliza los métodos setAttribute y getAttribute para agregar la clase bg-success a las clases que preexistentes en el nodo */

   let chat = document.getElementById("chat")
   let atributos = chat.getAttribute('class')
   atributos += ' bg-success'
   chat.setAttribute( 'class' , atributos)
}

chatStyle();
