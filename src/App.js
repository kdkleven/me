import { Header, Footer, Home, About, Portfolio, Contact } from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path="/home" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/portfolio" exact component={() => <Portfolio />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// <Route path="/about" exact component={() => <About />} />          