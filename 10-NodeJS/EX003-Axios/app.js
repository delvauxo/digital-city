const axios = require('axios').default;
const fs = require('fs');

const data = axios.get('https://pokeapi.co/api/v2/pokemon');

data
    .then(item => {
        console.log(item.data);
    });


function mineObj(obj,);