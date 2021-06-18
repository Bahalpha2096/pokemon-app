import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navigation from './components/Navigation/Navigation';
import PostList from './components/PostList/PostList';
import User from './components/User/User';
import UserList from './components/UserList/UserList';

function App() {
  return (
    <div>
      <header>
        <h1>welcome to my app</h1>
        <Navigation/>
      </header>
      <Home/>
      <About/>
      <UserList/>
      <User/>
      <PostList/>
      <postMessage/>
    </div>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
