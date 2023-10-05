import React from "react"

export default function Jokes(props) {
return(
    <>
    <h4>{props.setup}</h4>
   
    <p>{props.punchline}</p>
    <hr/>
    </>
)

}