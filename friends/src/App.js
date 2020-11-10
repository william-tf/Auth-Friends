import './App.css';
import LoginForm from './components/LoginForm'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {axiosWithAuth} from './components/utils/auth'
import Friends from './components/Friends'
import {PrivateRoute} from "./components/PrivateRoute"
import FriendMaker from './components/FriendMaker'

function App() {

  const logout = () =>{
   
        localStorage.removeItem('token')
  }

  return (
    <Router>
    <div className="App">
     <ul>
       <li>
       <Link to="/login" >Login</Link>
       </li>
       <li>
       <Link to="#" onClick={logout}>Logout</Link>
       </li>
       <li>
       <Link to="/protected">Protect</Link>
       </li>
     </ul>
     <Switch>
     <PrivateRoute exact path="/protected" component={Friends}/>
     <Route path="/login" component={LoginForm}/>
     <Route component={LoginForm}/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
