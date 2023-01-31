import React, {useState} from 'react'
import { Table, Card, CardTitle, CardBody, Col, Button } from "reactstrap";
import AddCategoryButton from './AddCategoryButton';

function AddCategory() {
    const [addCategoryModal, setAddCategoryModal] = useState(false);

    

    const handleShowNewsModal = () => {
      setAddCategoryModal(true);
    };
  
    const handleCloseNewsModal = () => {
      setAddCategoryModal(false);
    };
  return (
    <React.Fragment>
      <div className="page-content">
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
                News
              </span>
              <Button
                type="submit"
                name="btn"
                onClick={handleShowNewsModal}
                style={{
                  margin: "20px 0px 10px 20px",
                }}
              >
                Add Categories
              </Button>
              {AddCategoryButton(addCategoryModal, handleCloseNewsModal)}
            </CardTitle>
            <CardBody>
              <Table hover>
                <thead>
                  <tr className="text-center">
                    <th>{"SR_NO"}</th>
                    <th>{"CATEGORY_NAME"}</th>
                    <th>{"SUBCATEGORY_NAME"}</th>
                    <th>{"CREATED_DATE"}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={19}>
                      {/* <EmptyView
                        title={"Sorry!"}
                        discription={"No Categories Found"}
                        bgcolor={"white"}
                        src={Category}
                      ></EmptyView> */}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </div>
    </React.Fragment>
  )
}

export default AddCategory