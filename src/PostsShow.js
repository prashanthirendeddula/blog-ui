import React from "react"
import axios from "axios"
import {Link} from "react-router-dom"

class PostsShow extends React.Component{
    constructor(){
        super()
        this.state={
             
         users:{},
         post:[],
         comments:[]
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{//success
            const post=response.data
            axios.get(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then((response)=>{
                const users=response.data
                this.setState({users})
            })
       
            this.setState({post})
            console.log(post)
        })
        .catch((err)=>{
            console.log(err)
        })
      
        axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`) 
        .then((response)=>{
            console.log(response)
            const comments=response.data
            this.setState({comments})
        })    
       
       
                     .catch((err)=>{

                     })


                         
                       
                         
            }
                           

     

    
    render(){

        return(
            <div>
               <h1>UserName-{this.state.users.name}</h1>
               <h1>  Title:{this.state.post.title}</h1>
                    <h1>Body:<br/>{this.state.post.body}</h1>
                   
               <h1>comments</h1>
               <ul>
                   {
                       this.state.comments.map(function(comment){
                       return    <li key={comment.id}>{comment.body}</li>
                       })
                   }
               </ul>
             
          <h2><Link to={`/users/${this.state.users.id}`}>more posts of author-{this.state.users.name}</Link></h2>
                    
                  
            </div>
        )
    }
}
export default PostsShow