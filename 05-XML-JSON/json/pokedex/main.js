const urlAll = "https://pokeapi.co/api/v2/pokemon"

fetch(urlAll).then(function (response) {
    if (response.ok) {
        response.json().then(function (data) {
            const pokemons = data.results
            console.log(data);
            console.log(pokemons);

            for (const pokemon of pokemons) {
                console.log(pokemon);
            }

        })
    }
})