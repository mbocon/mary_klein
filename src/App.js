import { useEffect } from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Route, Switch } from "react-router-dom";

function App(props) {
   /* local variables */
   /* hooks */

   useEffect(() => {
      console.log('page loaded');
   }, []);

   return (
      <div className="App">
         <header className="header">
            <NavBar />
         </header>
         <main className="main">
            <Switch>
               <Route exact path="/" render={() => <Home />} />
            </Switch>
         </main>
         <footer className="footer">
            <Footer />
         </footer>
      </div>
   );
}

export default App;
