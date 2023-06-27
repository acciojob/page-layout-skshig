
import React from "react";
import './../styles/App.css';
import Header from "./Header";
import Footer from "./Footer";
import Children from "./Children";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Header 
          text = "Welcome to my website">
        <Children text = "This is the content of my website">

          </Children>

        </Header>
        <Footer 
          text = "© 2023 My Website.All rights reserved."
        />
    </div>
  )
}

export default App
