import React, { FC } from "react";
import { Navbar, Form, FormControl, Container } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import userIcon from "../../assets/images/user.png";
import messageIcon from "../../assets/images/message.png";
import notificationIcon from "../../assets/images/notification.png";
import profile from "../../assets/images/profile.png";
import searchIcon from "../../assets/images/search.png";
import "../../assets/stylesheet/navigation/navbar.scss";

const Navigation: FC<any> = () => {
  return (
    <Navbar bg="light" expand="lg">
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2">
            </FormControl>
            <img src={searchIcon} alt="search" className="search-icon"/>
          
        </Form>
        <Container className="justify-content-end">
          <img className="icon" src={userIcon} alt="user"/>
          <img className="icon" src={messageIcon} alt="message"/>
          <img className="icon" src={notificationIcon} alt="notification"/>
          <img className="profile-icon" src={profile} alt="profile" />
        </Container>
      </Navbar.Collapse>
    
    </Navbar>
  )
}

export default Navigation;
