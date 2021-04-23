reaload = () => {




    var busID = document.getElementById("busID")
    var formBus = document.getElementById("frmBuscar")

    var frmCantidad = document.getElementById("frmCantidad")
    var busCan = document.getElementById("busCan")
    const boton = document.querySelector("#miBoton");
    // Agregar listener
 

    formBus.onsubmit = (e) => {
        e.preventDefault();

        buscarID = busID.value;

        fetchKantoPokemon(buscarID);
    }  
    frmCantidad.onsubmit = (e) => {
        e.preventDefault();

        buscarCan = busCan.value;
        cantidadPokemon(buscarCan);
    }

    boton.addEventListener("click", function(evento){
        cantidadPokemon(20)
    });

    fetchKantoPokemon = (buscarID) => {
            //consultar por id o nombre
            fetch(`https://pokeapi.co/api/v2/pokemon/${buscarID}`)
            .then(response => response.json())
            .then(function (allpokemon) {
                //console.log(allpokemon);
                if(!Array.allpokemon) {
                    console.log("no es array")
                    atributosPokemon(allpokemon , buscarID)
                }
             
            })

        }
    
    cantidadPokemon = (buscarCan) => {
        //consultar por id o nombre
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${buscarCan}`)
        .then(response => response.json())
        .then(function (allpokemon) {
            allpokemon.results.forEach(function (pokemon) {   
                getPokemonData(pokemon);                
            })
        })

    }


    getPokemonData = (pokemon) => {

        fetch(pokemon.url)
        .then(response => response.json())
        .then(function (dataPokemon) {  
            console.log(dataPokemon)          
            imagePokemon(dataPokemon)
        })

    }
    imagePokemon = (allpokemon) => {
//console.log(pokeID)

        let seccionPokemon = document.getElementById("seccion_pokemon")
        let id = document.createElement('h6')
        let pokeImage = document.createElement('img')
        let nombre = document.createElement('p')
        let listaul = document.createElement('ul')
        let experiencia = document.createElement('h5')
        let altura = document.createElement('h5')
      
        id.classList.add('h6');
        nombre.classList.add('texto');
        experiencia.classList.add('h6');
        altura.classList.add('h6');
 
        id.textContent = 'ID: '+ allpokemon.id;
        experiencia.textContent= 'Experiencia: ' + allpokemon.base_experience;
        altura.textContent= 'Altura: ' + allpokemon.height;

        nombre.textContent = allpokemon.name;
        pokeImage.srcset = allpokemon.sprites.front_default;
        pokeImage.style.width = "100px";
        

   
        //   allpokemon.abilities.forEach(function (pokemon) {
 
        //      var linew= document.createElement("li"); 
        //      linew.classList.add('li');   
        //      var contenido = document.createTextNode(pokemon.ability.name);
        //      listaul.appendChild(linew);
        //      linew.appendChild(contenido);
          
              seccionPokemon.append(id,pokeImage,experiencia,altura,nombre)
        //  })

      
   
    }
    
    atributosPokemon = (allpokemon, buscarID) => {
    
        let lista = document.getElementById("lista-pokemon")
        let imagen =lista.getElementsByTagName("img")[0]
        let nombre =lista.getElementsByTagName("p")[0]
        let experiencia =lista.getElementsByTagName("h5")[0]
        let id =lista.getElementsByTagName("h6")[0]
       imagen.setAttribute("src", allpokemon.sprites.front_default)
       nombre.textContent = allpokemon.name;
       id.textContent = 'ID: '+ allpokemon.id;
       //experiencia.textContent = 'Altura: '+ allpokemon.base_experience;

       //document.getElementById("imges").src =allpokemon.sprites.front_default;
       // console.log(allpokemon.sprites.front_default)


       var listaul=document.getElementById("ulListado"); 
       document.getElementById("habilidades").innerHTML = 'Habilidades';
         allpokemon.abilities.forEach(function (pokemon) {
             console.log(pokemon.ability.name)

            var linew= document.createElement("li");    
            var contenido = document.createTextNode(pokemon.ability.name);
            listaul.appendChild(linew);
            linew.appendChild(contenido); 
                   
        })

     }


    
     
}