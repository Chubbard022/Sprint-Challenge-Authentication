import React from "react"
import axios from "axios"


class Jokes extends React.Component{
    state={
        jokes:[]
    }

    render(){
        return(
            <div>
                Hello from User component
            </div>
        )
    }
}



export default Jokes;