import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/about" component={About} />
            </Router>
        </div>
    );
}





export default App;