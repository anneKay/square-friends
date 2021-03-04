import React, { FC } from "react";
import { Row, Col, FormControl, InputGroup } from "react-bootstrap";
import { Translate } from "react-localize-redux";
import dropdown from "../../../assets/images/dropdown.png";
import searchIcon from "../../../assets/images/search.png";
import funnelIcon from "../../../assets/images/funnel.png";
import "../../../assets/stylesheet/home/header.scss";


export interface Props {
}

const Header: FC<Props> = () => {
  return (
    <>
      <Row xs={1} md={2}className="body-header">
        <Col> <h2 className="header-text"><Translate id="header.title" >Friends List</Translate></h2></Col>
        <Col className="justify-content-end">
          <Row className="header-input">
            <Col sm={2}><img className="search-icon" src={searchIcon} alt="search" /></Col>
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
