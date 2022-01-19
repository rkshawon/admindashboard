import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css"
import Home from "./pages/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/user";
import NewUser from "./pages/newUser/NewUser";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/users" element = {<UserList/>}/>
          <Route path="/user" element = {<User/>}/>
          <Route path="/newUser" element = {<NewUser/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
