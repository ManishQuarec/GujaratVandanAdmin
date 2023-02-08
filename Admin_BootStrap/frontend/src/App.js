import logo from "./logo.svg";
import "./App.css";
import { Row, Col } from "reactstrap";

import NavBar from "./Component/NavBar/NavBar";
import VerticalComponent from "./Component/VerticalComponent/VerticalComponent";
import BreakingNews from "./Pages/BreakingNews/BreakingNews";
import AddPaper from "./Pages/AddPaper/AddPaper";
import AddCategory from "./Pages/AddCategory/AddCategory";
import AddVideos from "./Pages/AddVideos/AddVideos";
import Login from "./Pages/Admin Login/Login";
import NewsAddingPage from "./Pages/NewsAddingPage/NewsAddingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
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
            <Col sm={10} style={{ height: "50rem" }}>
              <Routes>
                <Route path="/" element={<NewsAddingPage />} />
                <Route path="/AddCategory" element={<AddCategory />} />
                <Route path="/AddPaper" element={<AddPaper />} />
                <Route path="/Addvideos" element={<AddVideos />} />
                <Route path="/BreakingNews" element={<BreakingNews />} />
                <Route path="/Login" element={<Login />} />
              </Routes>
              {/* <BreakingNews /> */}
              {/* <AddPaper /> */}
              {/* <AddCategory/> */}
              {/* <NewsAddingPage/> */}
              {/* <AddVideos /> */}
              {/* <Login /> */}
            </Col>
          </Row>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
