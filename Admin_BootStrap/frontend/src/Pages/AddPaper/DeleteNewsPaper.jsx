import React,{useState} from 'react'
import {
  Modal,
  Alert,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  FormGroup,
  Label,
  Form,
  Input,
} from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

function DeleteNewsPaper(deleteBreakingnewsModal, handleCloseDeleteModal) {
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [files, setFiles] = useState();

  const dataValue = () => {

    axios.post()
  }
  return (
    <React.Fragment>
    <Modal
      isOpen={deleteBreakingnewsModal}
      centered={true}
      
    >
      <Alert
        color="success"
        style={{ width: "60%", marginLeft: "20%" }}
        isOpen={success}
      >
        {successMessage + " "+"Paper Submited"}
      </Alert>
      <Alert
        color="danger"
        style={{ width: "60%", marginLeft: "20%" }}
        isOpen={alert}
      >
        {alertMessage}
      </Alert>
      <ModalHeader>Delete or Upadte New's Paper</ModalHeader>

      <ModalBody>
        <div>
          <Form>
            <FormGroup>
              {/* <br /> */}

              <Label style={{ fontWeight: "500" }}>
                Select New's Paper Date
              </Label>

              <DatePicker
                selected={startDate}
                onChange={(Date) => setStartDate(Date)}
                minDate={new Date()}
                dateFormat="dd-MM-yyyy"
                shouldHighlightWeekends
              />
              <br />
              <br />

              <Label for="exampleFile" style={{ fontWeight: "500" }}>
                Select New's Paper{" "}
                <a style={{ color: "#dc3545" }}>( only PDF)</a>
              </Label>
              <Input
                id="exampleFile"
                name="file"
                type="file"
                accept="application/pdf"
                onChange={(e) => {
                  setFiles(e.target.files[0]);
                }}
              />

              {/* <Label>Breaking News</Label>
              <Input
                // name="text"
                type="textarea"
                bsSize="lg"
                innerRef={bnews}
                // value={bnews}
                className="mb-3"
                placeholder="News"
                style={{ width: "50rem", height: "30rem" }}
              /> */}
            </FormGroup>
            <ModalFooter style={{ float: "left", border: "none" }}>
              <Button type="button" name="btn" onClick={dataValue}>
                {/* //    onClick={dataValue} */}
                Create
              </Button>

              {/* type="submit"  */}

              <Button
                type="button"
                name="btn"
                color="danger"
                onClick={handleCloseDeleteModal}
              >
                Cancel
              </Button>
            </ModalFooter>
          </Form>
          {/* )} */}
          {/* </Formik> */}
        </div>
      </ModalBody>
    </Modal>
  </React.Fragment>
  )
}

export default DeleteNewsPaper