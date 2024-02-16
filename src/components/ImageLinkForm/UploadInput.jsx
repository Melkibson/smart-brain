import styled from "styled-components";
import Button from "./Button";

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  background-color: #f8f8f8;
`;

const Input = styled.input`
  display: none;
`

const Placeholder = styled.span`
  flex-grow: 1;
  margin-right: 10px;
`;

const UploadInput = ({ onClick }) => {
    return (
      <Label>
        <Input type="file" />
        <Placeholder>Choose an image</Placeholder>
        <Button onClick={onClick}label="Upload" />
      </Label>
    );
}

export default UploadInput;