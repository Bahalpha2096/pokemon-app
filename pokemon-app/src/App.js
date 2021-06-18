import { Switch, Route } from "react-router-dom";

import "./App.css";

import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import PostList from "./components/PostList/PostList";
import Post from "./components/Post/Post";
import UserList from "./components/UserList/UserList";
import User from "./components/User/User";

function App() {
  return (
    <div>
      <header>
        <h1>Welcome to my App</h1>
        <Navigation />
      </header>

      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/userlist">
            <UserList />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/postlist">
            <PostList />
          </Route>

          <Post />
        </Switch>
      </main>
    </div>
  );
}

export default App;
