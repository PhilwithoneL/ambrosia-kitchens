import React from 'react';
import Welcome from './components/Welcome';
import About from './components/About';
import NavBar from './components/NavBar';
import OurWork from './components/OurWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (

    <Router>
      <div>
        <NavBar />
        <Switch>
          
          <Route path = "/" exact component = { Welcome } />
          <Route path="/about" component= { About }/>
          <Route path="/OurWork" component= { OurWork } />
          <Contact path= "/Contact" component= { Contact } />
         
        </Switch>
        <Footer />
      </div>
    </Router>

  );

}

export default App;
