import Header from './components/Header'
import Mainscreen from './screens/Mainscreen'
import Menu from './components/Menu'
import Activity from './screens/Activity';
import Wallet from './screens/Wallet';
import Market from './screens/Market';
import Earn from './screens/Earn';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Header />
    <div className="container">
    <Router> 
    <Switch>
      <Route exact path = "/">
        <Mainscreen />
      </Route>
      <Route exact path = "/Activity">
        <Activity />
      </Route>
      <Route exact path = "/Wallet">
        <Wallet />
      </Route>
      <Route exact path = "/Market">
        <Market />
      </Route>
      <Route exact path = "/Earn">
        <Earn />
      </Route>
    </Switch>
    <Menu />
  </Router>
    </div>
      
    </div>
  );
}

export default App;
