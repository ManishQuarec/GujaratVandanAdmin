import React, { useEffect, useRef, useState } from "react";
import { Card, CardBody, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

function NewsAddingPage() {



  const NewsTittle = useRef("");
  const News = useRef("");
  const Catego = useRef({});
  const [files, setFiles] = useState();

  const [resData, setResData] = useState([]);

  const values = async() => {
    const header = new Headers();
    header.append('Access-Control-Allow-Origin', '*');
    let formData = new FormData();
    // console.log(Catego.current.value);
    // console.log(News.current.value);
    // const data = {
    //  " Category":  Catego.current.value,
    //   "NewsTittle": NewsTittle.current.value,
    //   "News": News.current.value
    // }
  formData.append("files", files);
  await formData.append("Category", Catego.current.value);
  await formData.append("News", News.current.value);
  await formData.append("NewsTittle", NewsTittle.current.value);

    console.log(Catego.current.value);


    axios.post("http://localhost:5000/call/AddNewsDetail",formData ).then((response) => {
      console.log(response);
    });
  };

  // console.log(resData[0].Category.GujCategory);

  useEffect(() => {
    axios.get("http://localhost:5000/call/GetCategory").then((response) => {
      setResData(response.data);
    });

    return () => {};
  }, []);

  console.log(resData);
  return (
    <Card
      style={{
        width: "80rem",
        height: "80vh",
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
            Select News Category
          </Label>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            bsSize="lg"
            style={{ width: "30%" }}
            innerRef={Catego}
            
          >
            {resData.map((item, index) => {
              return <option key={index} value={item.Category.EngCategory}>{item.Category.GujCategory} </option>;
            })}

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
            Select Image Or Video
          </Label>
          <Input
            id="exampleFile"
            name="file"
            type="file"
            style={{ width: "30%" }}
            accept="image/jpeg, image/jpg, video/mp4"
            onChange={(e) => {
              setFiles(e.target.files[0]);
            }}
          />
          <br />

          <Label
            for="exampleEmail"
            style={{ fontWeight: "500", marginLeft: "0.5%" }}
          >
            News Tittle
          </Label>

          <Input
            id="exampleEmail"
            name="text"
            // placeholder="with a placeholder"
            type="text"
            style={{ width: "60%" }}
            innerRef={NewsTittle}
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
            innerRef={News}
          />
          <br />
          <Button
            color="primary"
            tag="input"
            type="submit"
            value="Submit"
            style={{ fontWeight: "500", marginLeft: "0.5%" }}
            onClick={values}
          />
        </FormGroup>
      </CardBody>
    </Card>
  );
}

export default NewsAddingPage;