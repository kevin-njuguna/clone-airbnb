/* import React from "react"
import ReactDom from "react-dom"
import facebook from "./image/Facebook.png"
import github from "./image/Github.png"
import Contact from "./Contact"

import "./style.css"

ReactDom.render(
<>
<Contact

img = {facebook}
name = "Mr.Whiskerson"
email = "Mr.Whiskers@gmail.com"
/>
<Contact
img= {github}
name = "Mr.Scott"
email = "Mr.Scott@gmail.com"
/>
</>
, document.getElementById("root")) */

import React from "react";
import ReactDom from "react-dom"
import App from "./App"
import "./style.css"

ReactDom.render(<App/>,document.getElementById("root"))

const numbers = [1,2,3,4,5]

const squared = numbers.map(function(item) {
    return item * item
})

console.log(squared)

const names = ["alice","bob","charlie","danielle"]

const capital = names.map(function(item) {
    return `${names[0].toUpperCase} `
        
    
})

console.log(capital)

const pokemon = ["Bulbassaur", "Charmander", "Squirtle"]

const paragraph = pokemon.map(item => `
<p>${item}</p>
`  
     
  
     
)

console.log(paragraph)