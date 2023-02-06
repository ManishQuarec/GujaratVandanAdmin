import React from 'react'
import { Card, CardBody, FormGroup, Label, Input, Button } from "reactstrap";


function AddVideos() {
  return (
    <>
<Card
      style={{
        width: "69rem",
        height: "46rem",
        marginLeft: "5rem",
        marginTop: "3rem",
        marginBottom: "2rem",
      }}
    >
      <CardBody>
        {" "}
        <FormGroup>
          <Label
            for="exampleSelect"
            style={{ fontWeight: "500", marginLeft: "0.5%" }}
          >
            Select News Video
          </Label>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            bsSize="lg"
            style={{ width: "30%" }}
            // innerRef={Catego}
            
          >
            {/* {resData.map((item, index) => {
              return <option key={index} value={item.Category.EngCategory}>{item.Category.GujCategory} </option>;
            })} */}

            {/* <option>ભારત</option>
            <option>રાજકારણ</option>
            <option>રમત-જગત</option>
            <option>વ્યાપાર</option> */}
          </Input>
          <br />
          <Label
            for="exampleFile"
            style={{ fontWeight: "500", marginLeft: "0.5%" }}
          >
            Select Video
          </Label>
          <Input
            id="exampleFile"
            name="file"
            type="file"
            style={{ width: "30%" }}
            accept="image/jpeg, image/jpg, video/mp4"
            onChange={(e) => {
            //   setFiles(e.target.files[0]);
            }}
          />
          <br />

          <Label
            for="exampleEmail"
            style={{ fontWeight: "500", marginLeft: "0.5%" }}
          >
            Video Tittle
          </Label>

          <Input
            id="exampleEmail"
            name="text"
            // placeholder="with a placeholder"
            type="text"
            style={{ width: "60%" }}
            // innerRef={NewsTittle}
          />
          <br />

          <Label
            for="exampleText"
            style={{ fontWeight: "500", marginLeft: "0.5%" }}
          >
            News{" "}
          </Label>
          <Input
            id="exampleText"
            name="text"
            type="textarea"
            style={{ height: "20rem", width: "85%" }}
            // innerRef={News}
          />
          <br />
          <Button
            color="primary"
            tag="input"
            type="submit"
            value="Submit"
            style={{ fontWeight: "500", marginLeft: "0.5%" }}
            // onClick={values}
          />
        </FormGroup>
      </CardBody>
    </Card>
    </>
  )
}

export default AddVideos
