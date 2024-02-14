import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  max-width: 600px;
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const BoundingBox = styled.div`
  position: absolute;
  box-shadow: 0 0 0 3px #149df2 inset;
  cursor: pointer;
`;

export default function FaceRecognition({ imageUrl, alt, boxes }) {
  return (
    <Container>
      <ImageContainer>
        <Image id="inputImage" src={imageUrl} alt={alt} />
        {boxes.map((box, index) => (
          <BoundingBox
            key={index}
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></BoundingBox>
        ))}
      </ImageContainer>
    </Container>
  );
}
