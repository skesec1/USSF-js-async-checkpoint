const fs = require('fs')
var fetch = require('node-fetch')
const { type } = require('os')

//read input file and send to contentString
var contentString = fs.readFileSync('/Users/EFB-Macbook/Desktop/Cohort1/USSF-js-async-checkpoint/input.txt', 'utf8')
//contentString into an array
var contentArray = contentString.split('\n')

//loop through the array
contentArray.forEach(pokemonName => {
    var pokemonTypeArray = []
    var url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    fetch(url)
        .then(response => response.json())
        .then(json => (json.types))
        .then(typeArray => {
            typeArray.forEach(typeObject => {
                pokemonTypeArray.push(typeObject.type['name'])
            })
            console.log(`Pokemon Name: ${pokemonName} \n Type: ${pokemonTypeArray.join(', ')}`)
        })
})




