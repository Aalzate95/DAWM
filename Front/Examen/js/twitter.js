
let cargarData = () => {

    fetch('https://dataserverdaw.herokuapp.com/twitter/xml')
    .then( (resultado) => {
        return resultado.text() 
    })
    .then( (str) => {
        
        let parser = new DOMParser()
        
        let xml = parser.parseFromString(str, "text/xml");
        
        let count = 0;
        for (let e of xml.getElementsByTagName("twitterer")){

            if (e.getElementsByTagName("tweeted").length !== 0){

                let card = document.createElement("div");
                card.setAttribute('class','card')

                let contenedor = document.createElement("div");
                contenedor.setAttribute('name','contenedor')

                let titulo = document.createElement("h4");
                titulo.setAttribute('name','titulo')
                titulo.setAttribute('class','titulo')

                let subtitulo = document.createElement("div")
                subtitulo.setAttribute('name','subtitulo')

                let buttonContainer = document.createElement("div")
                buttonContainer.setAttribute('name','buttonContainer')

                let usuario = document.createElement("p");
                usuario.setAttribute('name','usuario')

                let fotoPerfil = document.createElement("picture")
                

                let seguir = document.createElement("button")
                seguir.setAttribute("name","seguir")
                seguir.innerText = "Seguir";

                let seguidores =  document.createElement("p");
                let publicaciones = document.createElement("p");
                let contenido = document.createElement("p");

                let fecha = document.createElement("p");
                fecha.setAttribute("name","fecha")

                // extracción imagen

                let imagen = e.getElementsByTagName('picture')[0]
                let imagenText = imagen.textContent;
                let foto = document.createElement("img")
                foto.setAttribute("src",imagenText)
                fotoPerfil.setAttribute("name",'foto')
                fotoPerfil.appendChild(foto)

                // extracción nombre
                let name = e.getElementsByTagName('name')[0]
                let nameText = name.textContent; 
                titulo.innerText = nameText;
                contenedor.appendChild(titulo);
                // extraccion usuario
                let user = e.getElementsByTagName('user')[0]
                let userText = user.textContent; 
                usuario.innerText = userText;
                // extraccion seguidores
                let followers = e.getElementsByTagName('followers')[0]
                let followersText = followers.textContent; 
                seguidores.innerText = followersText+' FOLLOWERS';
                // extraccion tweets
                let tweets = e.getElementsByTagName('tweets')[0]
                let tweetsText = tweets.textContent; 
                publicaciones.innerText = tweetsText+' TWEETS';
                subtitulo.appendChild(usuario)
                subtitulo.appendChild(seguidores)
                subtitulo.appendChild(publicaciones)
                contenedor.appendChild(subtitulo);
                // extraccion texto
                let mensaje = e.getElementsByTagName('text')[0]
                let mensajeText = mensaje.textContent; 
                contenido.innerText = mensajeText;
                contenedor.appendChild(contenido);
                // extraccion fecha
                let tweeted = e.getElementsByTagName('tweeted')[0]
                let tweetedText = tweeted.textContent; 
                fecha.innerText = tweetedText.split('T')[0];
                contenedor.appendChild(fecha);

                buttonContainer.append(seguir)
                contenedor.appendChild(buttonContainer)

                card.appendChild(fotoPerfil)
                card.appendChild(contenedor)
                if (count < 10){
                    card.setAttribute("id",count)
                    document.getElementById('contenedorTweets').appendChild(card);
                    count++;
                }
                
            }
            
        }
        
        
    })
    .catch( (error) => {

        console.log("Error ",error)
    
      })
}
document.addEventListener('DOMContentLoaded', function() {
    cargarData();
  })