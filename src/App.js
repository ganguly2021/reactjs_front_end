import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux/store'

import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import Home from './components/Layout/Home'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route path="*" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
