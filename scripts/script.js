reaload = () => {

    var btnEnviar = document.getElementById("botonEnviar");
    var form = document.getElementById("frmEnviar")

    var inpNombre = document.getElementById("nombre")
    var inpEdad = document.getElementById("edad")
    var inpMensaje = document.getElementById("mensaje")
    var busID = document.getElementById("busID")

    var pMsj = document.getElementById("msj")


    // btnEnviar.addEventListener("click", ()=> {
    //     console.log("hola mundo")
    // })
    console.log(busID.value);

    form.onsubmit = (e) => {
        // alt + 96  ``

        e.preventDefault();

        let cadenaMsj = `La persona con el nombre ${inpNombre.value} y edad ${inpEdad.value} envia el mensaje "${inpMensaje.value}"`

        console.log(cadenaMsj)
        //console.log(form.nombre.value)
        pMsj.innerHTML = cadenaMsj
    }

    var formBus = document.getElementById("frmBuscar")
    var busID = document.getElementById("busID")

    formBus.onsubmit = (e) => {
        // alt + 96  ``

        e.preventDefault();

        buscarID = busID.value;
        //console.log(buscarID)
        //console.log(form.nombre.value)
        //fetchKantoPokemon(dataPokemon)

    

        fetchKantoPokemon(buscarID);
    }

    fetchKantoPokemon = (buscarID) => {
        if (buscarID == null) {
            fetch(`https://pokeapi.co/api/v2/berry/${buscarID}`)
            .then(response => response.json())
            .then(function (allpokemon) {
                allpokemon.results.forEach(function (pokemon) {
                    getPokemonData(pokemon);
                    // console.log(pokemon);          
                })
            })
        } else {
            fetch(`https://pokeapi.co/api/v2/berry/${buscarID}`)
            .then(response => response.json())
            .then(function (allpokemon) {
                console.log(allpokemon);
                if(!Array.allpokemon) {
                    console.log("no es array")
                    getPokemonData(pokemon , buscarID);
                    
                }

             
                
                     //console.log(buscarID);          
             
            })

        }
        //console.log(this->busID)
      
    }

    //fetchKantoPokemon();

    getPokemonData = (pokemon, buscarID) => {

        fetch(pokemon.url)
            .then(response => response.json())
            .then(function (dataPokemon) {
                //console.log(dataPokemon);           
                imagePokemon(dataPokemon, buscarID)
            })

    }

    imagePokemon = (pokeID, buscarID) => {
        console.log(pokeID);
        let seccionPokemon = document.getElementById("seccion_pokemon")
        let seccionNombre = document.getElementById("nombre")
        let pokeImage = document.createElement('img')
        let seccionnombre = document.createElement('h4')
        let pokNombre = "";


        pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${buscarID}.png`
        pokeImage.style.width = "100px";
        pokNombre = pokeID.name;
        //console.log(pokNombre)

        //console.log(`https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`)
        //seccionNombre.append(pokNombre);
        document.getElementById("demo").innerHTML = '<div class="caja" ><img src="'+ pokeImage.srcset +'" width="50px" alt=""> <p class="texto">'+pokNombre+'</p></div>';
     
    }

}