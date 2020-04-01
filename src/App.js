import React from "react"
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from "./Home"
import Users from "./Users"
import UserShow from "./UserShow"
import Posts from "./Posts"
import PostsShow from "./PostsShow"
 function App(){
     return(
         <BrowserRouter>
         <div>
             <ul>
             <li><Link to="/">Home</Link></li>
              <li><Link to= "/users">Users</Link></li>
              <li><Link to="/posts">Posts</Link></li>
              </ul>
             <Route path="/"component={Home}  exact={true}/>
             <Route path="/users"component={Users} exact={true}/> 
             <Route path="/users/:id"component={UserShow}/>
             <Route path="/posts"component={Posts} exact={true}/>
             <Route path="/posts/:id"component={PostsShow}/>

         </div>
         
         </BrowserRouter>

     )
 }
 export default App