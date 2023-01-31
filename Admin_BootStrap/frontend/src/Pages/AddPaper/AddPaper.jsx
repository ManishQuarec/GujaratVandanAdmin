import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardBody,
  Table,
  CardTitle,
  CardText,
  Button,
  Col,
} from "reactstrap";

import AddNewsPaper from "./AddNewsPaper";
import DeleteNewsPaper from "./DeleteNewsPaper";

function AddPaper() {
  const [newsData, setNewsData] = useState([]);
  const [addBreakingnewsModal, setBreakingnewsModal] = useState(false);
  const [deleteBreakingnewsModal, setDeleteBreakingnewsModal] = useState(false);
  const handleShowDeleteModal = () => {
     
    setDeleteBreakingnewsModal(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteBreakingnewsModal(false);
  };


  const handleShowNewsModal = () => {
    setBreakingnewsModal(true);
  };

  const handleCloseNewsModal = () => {
    setBreakingnewsModal(false);
  };


  return (
    <>
      {" "}
      <Col lg={12}>
        <Card>
          <CardTitle
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span
              style={{
                padding: "20px 0px 10px 20px",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              News Paper
            </span>
            <Button
              type="submit"
              name="btn"
                onClick={handleShowNewsModal}
              style={{
                margin: "20px 0px 10px 20px",
                backgroundColor: "Green",
              }}
            >
              Add News Paper
            </Button>
            {AddNewsPaper(addBreakingnewsModal, handleCloseNewsModal)}
            <Button
            // color="info"
              type="submit"
              name="btn"
                onClick={handleShowDeleteModal}
              style={{
                margin: "20px 0px 10px 20px",
                backgroundColor: "Red yellow",
              }}
            >
              Update News Paper
            </Button>
            {/* {DeleteNews(deleteBreakingnewsModal, handleCloseDeleteModal)} */}
          </CardTitle>
          <CardBody>
            <Table hover>
              <thead>
                <tr className="text-center">
                  <th>Sr No.</th>
                  <th> News Paper</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {/* {newsData.map((newsItem, index) => (
              <tr key={index} style={{width:"60rem"}}>
                <th scope="row">{newsItem.SrNo}</th>
                <td>{newsItem.News}</td>
                <td>{newsItem.Title}</td>
                <td>{newsItem.Submitted}</td>
                </tr>
                ))} */}
                <tr style={{ width: "60rem" }}>
                  <th scope="row">3</th>
                  <td>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quaerat odit mollitia blanditiis dicta dignissimos vel
                    minima, dolorem aliquid facere praesentium atque iste
                    dolore, incidunt similique itaque cumque, reiciendis quo
                    odio?
                  </td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default AddPaper;
