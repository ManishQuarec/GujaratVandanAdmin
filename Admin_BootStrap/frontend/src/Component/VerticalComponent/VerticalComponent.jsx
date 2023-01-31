import React, {useState}from "react";
import {
  Navbar,
  NavbarBrand,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ImgNews from "../../assets/newspaper.png";
import BreakingNews from "../../assets/breaking-news.png";
import Categories from "../../assets/categories.png";
import Ebook from "../../assets/e-book.png";

import "./VerticalComponent.css";

function VerticalComponent() {
  

  return (
   <>

        <div style={{ color: "white",  fontWeight: "bold", backgroundColor: "black", }}>
          {" "}
          Menu{" "}
        </div>

        <ListGroup className="g-0 gy-0 border-0">
          <div className="Data">
            <ListGroupItem className="new">
              <img src={ImgNews} alt="" />
              <p>News</p>
            </ListGroupItem>
            <ListGroupItem className="new">
              <img src={Categories} alt="" />
              <p> Categories </p>
            </ListGroupItem>
            <ListGroupItem className="new">
              <img src={Ebook} alt="" />
              <p>E-News </p>
            </ListGroupItem>
            <ListGroupItem className="new">
              <img src={BreakingNews} alt="" />
              <p> Breaking News </p>
            </ListGroupItem>
          </div>
        </ListGroup>
        {/* </div> */}
        </>
     
  );
}

export default VerticalComponent;
