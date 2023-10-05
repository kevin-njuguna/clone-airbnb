import React from "react"
import JokesData from "./JokesData"
import Jokes from "./Jokes"


export default function App() {
   const jokeElements = JokesData.map(joke => {
    return <Jokes setup={joke.setup} punchline = {joke.punchline}/>
   }) 

   return <>
   {jokeElements}
   </>
     

        
       
}