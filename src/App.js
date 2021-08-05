import Nav from "./Components/Nav"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import Footer from "./Components/Footer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Posts from "./Components/Posts";
import AddPost from "./Components/AddPost"
function App() {
  return (
    <BrowserRouter>
     <Nav/>
     <Switch>
     <Route path="/" exact component={Posts} />
     <Route path="/addpost" exact component={AddPost} />
     </Switch>
    
     <Footer/>
     </BrowserRouter>
  );
}

export default App;
