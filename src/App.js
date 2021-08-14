import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SmoothScrollBar from './components/SmoothScrollBar';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    < >
      <Router>

        <Navbar />
        <SmoothScrollBar>

          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/projects"><Projects /></Route>
            <Route path="/blogs"><Blogs /></Route>
            <Route path="/contact"><Contact /></Route>
          </Switch>
          <Footer />
        </SmoothScrollBar>

      </Router>
    </>
  );
}

export default App;
