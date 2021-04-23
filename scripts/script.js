reaload = () => {

    
    var busID = document.getElementById("busID")
    var formBus = document.getElementById("frmBuscar")

    var frmCantidad = document.getElementById("frmCantidad")
    var busCan = document.getElementById("busCan")

    formBus.onsubmit = (e) => {
        // alt + 96  ``

        e.preventDefault();

        buscarID = busID.value;

        fetchKantoPokemon(buscarID);
    }  
    frmCantidad.onsubmit = (e) => {
        e.preventDefault();

        buscarCan = busCan.value;
        cantidadPokemon(buscarCan);
    }

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
            atributosPokemon(dataPokemon)
        })

    }
    imagePokemon = (pokeID) => {
//console.log(pokeID)
        let seccionPokemon = document.getElementById("seccion_pokemon")
        let pokeImage = document.createElement('img')
        pokeImage.srcset =  `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`
        pokeImage.style.width = "100px";

       

        seccionPokemon.append(pokeImage)
        seccionPokemon.style.background = "red"
    }

    // imagePokemon = (pokeID, buscarID) => {
    //    // console.log(pokeID);
    //     let seccionPokemon = document.getElementById("seccion_pokemon")
    //     let seccionNombre = document.getElementById("nombre")
    //     let pokeImage = document.createElement('img')
       
    //     let pokNombre = "";


    //     pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${buscarID}.png`
    //     pokeImage.style.width = "100px";
    //     pokNombre = pokeID.name;
    //     //console.log(pokNombre)

    //     //console.log(`https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`)
    //     //seccionNombre.append(pokNombre);
    //     document.getElementById("demo").innerHTML = '<div class="caja" ><img src="'+ pokeImage.srcset +'" width="50px" alt=""> <p class="texto">'+pokNombre+'</p></div>';
     
    // }

    
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


        // document.getElementById("demo").innerHTML = '<div class="caja" ><img src="" width="50px" alt=""> <p class="texto">'+allpokemon.name+'</p></div>';
     

     }



}