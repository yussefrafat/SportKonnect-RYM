const { response } = require("express");

let basketballKey ='b7ac2a015a7ddd007e0f21f15d0be676';




fetch('"https://v1.basketball.api-sports.io/', {
    'method': 'GET',
    'headers': {
        'x-rapidapi-host': "v1.basketball.api-sports.io",
        "x-rapidapi-key": basketballKey
    }
}).then(response => {
    console.log(response);
}).catch(err => {
    console.log(err);
})