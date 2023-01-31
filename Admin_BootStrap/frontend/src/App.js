import logo from "./logo.svg";
import "./App.css";
import { Row, Col } from "reactstrap";

import NavBar from "./Component/NavBar/NavBar";
import VerticalComponent from "./Component/VerticalComponent/VerticalComponent";
import BreakingNews from "./Pages/BreakingNews/BreakingNews";
import AddPaper from "./Pages/AddPaper/AddPaper";
import AddCategory from "./Pages/AddCategory/AddCategory";
import NewsAddingPage from "./Pages/NewsAddingPage/NewsAddingPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Row
        className="g-0 gy-0 border-0"
        style={{ border: "1px solid red", height: "91vh" }}
      >
        <Col
          sm={2}
          style={{ backgroundColor: "black" }}
          className="g-0 gy-0 border-0"
        >
          <VerticalComponent />
        </Col>
        <Col sm={10} style={{ border: "1px solid green" }}>
          {/* <BreakingNews /> */}
          {/* <AddPaper /> */}
          {/* <AddCategory/> */}
          <NewsAddingPage/>
        </Col>
      </Row>
    </div>
  );
}

export default App;