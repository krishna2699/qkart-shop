import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import React from "react";
import { ThemeProvider } from '@mui/material';
import theme from "./theme";
import Checkout from './components/Checkout'
import Thanks from './components/Thanks'
export const config = {
  endpoint: 'https://qkart-shop-3ebq.onrender.com',
};

function App() {
  return (
    <React.StrictMode>
    <ThemeProvider theme={theme}>
    <div className="App">
      {/* TODO: CRIO_TASK_MODULE_LOGIN - To add configure routes and their mapping */}
        <Switch>
          
            <Route path='/login'><Login /></Route>
            <Route path='/thanks'><Thanks /></Route>
            <Route path='/register'><Register /></Route>
            <Route path='/checkout'><Checkout /></Route>
            <Route path='/'><Products /></Route>

            </Switch>
    </div>
    </ThemeProvider>
    </React.StrictMode>
    
  );
}

export default App;
