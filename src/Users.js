import React from "react"
import {Link} from 'react-router-dom'
import axios from "axios"
class Users extends React.Component{
    constructor(){
        super()
        this.state={
            users:[]
            
        }
    }
    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then((response)=>{//success
            console.log(response.data)
            const users=response.data
            this.setState({users})

        })
        .catch((err)=>{ //failure
            console.log(err)
        })
        }
    
    render(){
        return(
            <div>
            
           
                   
                 <h2>listing users-{this.state.users.length}</h2>
                 
                  <ul>
                  {this.state.users.map(function(user){
                     return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                  })
                  }  
                    </ul>
                  
                
        


            
            </div>
        )
    }
}

  
export default Users