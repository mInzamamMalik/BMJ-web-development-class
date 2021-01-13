import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/about">
            <About />
          </Route>

        </Switch>

    </BrowserRouter>
  );
}

export default App;





function Home() {
  return <h1>this is Home page</h1>
    ;
}
function Contact() {
  return <h1>this is Contact page</h1>

}
function About() {
  return <h1>this is About page</h1>

}