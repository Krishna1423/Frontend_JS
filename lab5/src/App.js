import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function UserProfile({match}) {
  const userId = match.params.id;

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {userId}</p>
    </div>
  );
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function Login(){
  return <h2>Login</h2>;
}

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <><Router>
      <Switch>
        <Route path="/user/:id" component={UserProfile} />
      </Switch>
    </Router>
    
    <Router>
      <Switch>
        <Route path="/dashboard">
          {loggedIn ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login" component={Login} />
        <Redirect from="/" to="/dashboard" />
      </Switch>

    </Router></>
  );
}

export default App;
