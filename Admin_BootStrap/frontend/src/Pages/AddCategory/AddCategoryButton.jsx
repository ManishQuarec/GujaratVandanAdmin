import React, { useState, useRef } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Form,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import axios from "axios";

function AddCategoryButton(addCategoryModal, handleCloseNewsModal) {
  const GujInput = useRef("");
  const EngInput  = useRef("");

  const DataValues = async() => {
   const  data = {
    "EngInput": EngInput.current.value,
    "GujInput": GujInput.current.value
   }
   await axios.post("http://localhost:5000/call/AddingCategory", data );
  };
  // const [state, setState] = useState(false);

  // console.log(state);

  return (
    <React.Fragment>
      <Modal isOpen={addCategoryModal} centered={true}>
        <ModalHeader>Add Category </ModalHeader>
        <ModalBody>
          <div>
            <FormGroup switch>
              {/* <Input
                type="checkbox"
                data-toggle="toggle"
                checked={state}
                onChange={() => {
                  setState(!state);
                }}
              />

              <Label check>Add SubCategory</Label> */}
            </FormGroup>

            <Form>
              {/* <CustomInput
                  type="text"
                  placeholder="Enter Your Category"
                  name="category_name"
                  values={values}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors}
                  style={{
                    borderWidth: 2,
                    borderColor: "#000000",
                  }}
                /> */}
              <Label style={{ fontWeight: "500" }}>Category Name in Gujarati:</Label> &nbsp;
              <Input type="text" innerRef={GujInput} />
              <Label style={{ fontWeight: "500" }}>Category Name in English:</Label> &nbsp;
              <Input type="text" innerRef={EngInput} />
              {/* {state ? (
                <>
                <br/>
                  <Label style={{fontWeight:"500"}}>Add SubCategory Name:</Label> &nbsp;
                  <input type="text" />
                </>
              ) : null} */}
              <ModalFooter>
                <Button type="button" onClick={DataValues}>
                  Create
                </Button>
                <Button
                  type="button"
                  color="danger"
                  onClick={handleCloseNewsModal}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

export default AddCategoryButton;
