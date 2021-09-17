import classes from  './App.module.css';
import { Route,Switch, Link } from 'react-router-dom';
import Allmeetups  from './pages/allmeetups'
import Favorites from './pages/Favorites';
import Addnew from './pages/addnew';
import Card from './components/card';


function App() {
  return (
    
    <div className={classes.app}>
      <div className={classes.navbar}>
      <span className={classes.logo}><Link to="/"> Meetups </Link></span> 
      <div className={classes.links}>
      <span className={classes.link}><Link to="/favorites">favorites  </Link></span>
      <span className={classes.link}><Link to="/allmeetups"> allmeetups</Link></span>
      <span className={classes.link}><Link to="/addnew"> add new meetup</Link></span>
      </div>
      </div>
      <Switch>
      <Route exact path="/">
      <Card/>
      </Route>
      <Route exact path="/allmeetups">
      <Allmeetups/>
      </Route>
      <Route exact path="/favorites">
      <Favorites/>
      </Route>
      <Route exact path="/addnew">
      <Addnew/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
