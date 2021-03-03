import React from 'react';
import Navigation from "../../components/Navbar/Navbar";
import friends from "../../Helper/friendsData/friendsList.json"
import Header from "./Header";
import Card from "./Card";
import "../../assets/stylesheet/home/home.scss";


interface Props {
}

const Home: React.FC<Props> = () => (
  <div>
    <Navigation />
    <div className="main-container">
      <div className="body">
        <Header />
        <Card />
      </div>
    </div>
  </div>

)

export default Home;
