import React from 'react';
import Navigation from "../../components/Navbar/Navbar";
import Header from "./Header";


const Home: React.FC<{title:string}> = ({children, title}) => {
  return <div>
    <Navigation />
    <div className="body">
      <Header />
    </div>
    
  </div>

};

export default Home;
