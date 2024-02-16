import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import styled from "styled-components";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

const Main = styled.main`
  min-height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
`;

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [boxes, setBoxes] = useState([]);

  const PAT = "7f8e2cc51dd947f695c5b7c9fe72e725";
  const USER_ID = "yamna";
  const APP_ID = "face-recognition";
  const MODEL_ID = "face-detection";
  const IMAGE_URL = input;

  const calculateFaceLocation = (data) => {
    return  data.outputs[0].data.regions.map((face) => {
      const clarifaiFace = face.region_info.bounding_box;
      const image = document.querySelector("#inputImage");
      const width = Number(image.width);
      const height = Number(image.height);
      console.log(clarifaiFace);
      return {
        leftCol: clarifaiFace.left_col * width + 15,
        topRow: clarifaiFace.top_row * height + 15,
        rightCol: width - clarifaiFace.right_col * width + 15,
        bottomRow: height - clarifaiFace.bottom_row * height + 15,
      };
    });
  };
  const displayFaceBox = (boxes) => {
    setBoxes(boxes);
    
  };

  const getFaceBoxes = () => {

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    fetch(
      `https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        displayFaceBox(calculateFaceLocation(result));
      })
      .catch((error) => console.log("error", error));
  }
  const onInputChange = (event) => {
    setInput(event.target.value);
  };


  const onBtnSubmit = () => {
    setImageUrl(input);
    getFaceBoxes();
  };

  return (
    <Main className="App">
      <Navigation
      />
        <>
          <ImageLinkForm
            onInputChange={onInputChange}
            onBtnSubmit={onBtnSubmit}
          />
          <FaceRecognition imageUrl={imageUrl === "" ? '/image-placeholder.png' : imageUrl} alt="" boxes={boxes} />
        </>
    </Main>
  );
}


export default App;
