import React, { FC } from "react";
import { Row, Col, Form, FormControl, InputGroup } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import userIcon from "../../assets/images/user.png";
import messageIcon from "../../assets/images/message.png";
import notificationIcon from "../../assets/images/notification.png";
import profile from "../../assets/images/profile.png";
import dropdown from "../../assets/images/dropdown.png";
import searchIcon from "../../assets/images/search.png";
import funnelIcon from "../../assets/images/funnel.png"
import "../../assets/stylesheet/home/header.scss";

const Header: FC<any> = () => {
  return (
    <>
      <Row className="body-header">
        <Col> <h2 className="header-text">Friends List</h2></Col>
        <Col className="justify-content-end">
          <Row>
            <Col sm={2}><img className="search-icon" src={searchIcon} alt="search"></img></Col>
            <Col sm={6}>
            <InputGroup>
              <FormControl type="text" placeholder="Sort by:" className=" mr-sm-2">
              </FormControl>
              <InputGroup.Prepend>
              <InputGroup.Text><img src={dropdown} alt="dropdown"/></InputGroup.Text>
            </InputGroup.Prepend>
            </InputGroup>
            </Col>
            <Col><img className="filter-icon" src={funnelIcon} alt="filter" /></Col>
          </Row>
          
          
        </Col>
    </Row>
    </>
  )
}

export default Header;
