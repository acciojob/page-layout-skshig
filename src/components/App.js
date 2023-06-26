
import React from "react";
import './../styles/App.css';
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Header 
          text = "Welcome to my website">
        
        <p>This is the content of my website.</p>
        </Header>
        <Footer 
          text = "© 2023 My Website.All rights reserved."
        />
    </div>
  )
}

export default App
