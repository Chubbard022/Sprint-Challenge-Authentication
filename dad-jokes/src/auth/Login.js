import React from "react"
import axios from "axios"

class Login extends React.Component{
    state={
        username: "url5",
        password: "pass"

    }
        
    handleSubmit = event =>{
        event.preventDefault()
        const URL = "http://localhost:3300"

        axios
            .post(`${URL}/api/login`,this.state)
            .then(res=>{
                localStorage.setItem('jwt', res.data.token)
                this.props.history.push("/users")
            })
            .catch(err=>{console.log("LOGIN ERROR::",err)})
    }
    handleChange = event =>{
        event.preventDefault()
        const {id,value} = event.target;
        this.setState=({[id]:value})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        id="username"
                        value={this.state.username}
                        type="text"
                        onChange={this.handleChange}
                    />
                    <input 
                        id="password"
                        value={this.state.password}
                        type="text"
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}



export default Login;