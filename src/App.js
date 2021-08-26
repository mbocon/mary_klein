import { useEffect, useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ContactForm from "./components/ContactForm/ContactForm";
import { Route, Switch } from "react-router-dom";

function App(props) {
  const [theme, setTheme] = useState("dark");
   
  function toggleTheme(e) {
     e.preventDefault();

     if (theme === "dark") {
        setTheme("light");
        
     } else {
        setTheme("dark");
     }
  }

   useEffect(() => {
   }, []);

   return (
      <div className="App">
         <header className="header">
            <NavBar toggleTheme={toggleTheme} theme={theme} />
         </header>
         <main className="main">
            <Switch>
               <Route exact path="/" render={() => <Home />} />
               <Route exact path="/contact" render={() => <ContactForm theme={theme} />} />
            </Switch>
         </main>
         <footer className="footer">
            <Footer toggleTheme={toggleTheme}  theme={theme}/>
         </footer>
      </div>
   );
}

export default App;
