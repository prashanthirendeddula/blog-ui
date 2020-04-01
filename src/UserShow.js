import React from "react"
import {Link} from "react-router-dom"
import axios from "axios"

class UsersShow extends React.Component{
    constructor(){
        super()
        this.state={
             
         user:[],
         posts:[]
        }
    }
    componentDidMount(){
        let id=this.props.match.params.id
                           axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
                           .then((response)=>{//success
                               const user=response.data
                               this.setState({user})

                           })
                           .catch((err)=>{
                               console.log(err)
                           })
                           axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
                           .then((response)=>{//success
                               const posts=response.data
                               this.setState({posts})

                           })
                           .catch((err)=>{
                           })

                           
            
            }
                           

     

    
    render(){

        return(
            <div>
        <h1>user name:{this.state.user.name}</h1>
        <h1>posts written by user</h1>
  {this.state.posts.map(post=>{
                  return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                  })
                  }  
                    
                  
            </div>
        )
    }
}
export default UsersShow