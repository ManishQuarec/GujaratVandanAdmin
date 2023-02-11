import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardBody,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from "reactstrap";
import axios from "axios";

function NewsAddingPage() {
  const [alert, setAlert] = useState(false);
  const [failAlert, setFailAlert] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    

    setFiles(e.target.files[0]);

    // setFiles(e.target.files[0]);
  };
  const NewsTittle = useRef("");
  const News = useRef("");
  const Catego = useRef({});
  const [files, setFiles] = useState();
  // const [Videofiles, setVideoFiles] = useState();

  const [resData, setResData] = useState([]);

  const values = async () => {
    if (!files) {
      setFailAlert(true);
      setMessage("Please Select Image in jpg or png");

      setTimeout(() => {
        setFailAlert(false);
        setMessage("");
      }, 2000);
    }

    if (!files.name.match(/\.(jpg|jpeg|png)$/)) {
      setFailAlert(true);
      setMessage("Please Select Image in jpg or png");

      setTimeout(() => {
        setFailAlert(false);
        setMessage("");
      }, 2000);
      return false;
    }

    if (NewsTittle.current.value == "" || News.current.value == "") {
      setFailAlert(true);
      setMessage("Please Enter  News Tittle and News");

      await setTimeout(() => {
        setFailAlert(false);
        setMessage("");
      }, 2000);
    } else {
      const header = new Headers();
      header.append("Access-Control-Allow-Origin", "*");
      let formData = new FormData();

      formData.append("files", files);
      // formData.append("Videofiles", Videofiles);

      await formData.append("Category", Catego.current.value);
      await formData.append("News", News.current.value);
      await formData.append("NewsTittle", NewsTittle.current.value);

      console.log(Catego.current.value);

      axios
        .post(process.env.REACT_APP_API_BASE_URL + "/AddNewsDetail", formData)
        .then(async (response) => {
          if (response.status == 200) {
            setAlert(true);
            setMessage("Successfully Added News");

            await setTimeout(() => {
             
              setMessage("");
              setAlert(false);
            }, 2000);
          }
        }).catch(async(error)=>{

          setFailAlert(true);
          setMessage("Failed To Add News");
  
          await setTimeout(() => {
            
            setMessage("");
            setFailAlert(false);
            
          }, 2000);
     

        })
    }
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_BASE_URL + "/GetCategory")
      .then((response) => {
        setResData(response.data);
      });

    return () => {};
  }, []);

  console.log(resData);
  return (
    <>
      <Alert
      isOpen={alert || failAlert}
        color={alert ? "success" : "danger"}
        style={{ width: "40%", marginLeft: "60%", marginTop: "1%" }}
        
      >
        {message}
      </Alert>
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
                return (
                  <option key={index} value={item.Category.EngCategory}>
                    {item.Category.GujCategory}{" "}
                  </option>
                );
              })}
            </Input>
            <br />
            <Label
              for="exampleFile"
              style={{ fontWeight: "500", marginLeft: "0.5%" }}
            >
              Select Image
            </Label>
            <Input
              id="exampleFile"
              name="file"
              type="file"
              style={{ width: "30%" }}
              accept="image/jpeg, image/jpg, "
              onChange={handleChange}
              // setFiles(e.target.files[0]);
            />
            <br />

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
    </>
  );
}

export default NewsAddingPage;
