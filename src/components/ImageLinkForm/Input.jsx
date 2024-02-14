import styled from "styled-components"

const DetectInput = styled.input`
  font-size: 1.25rem;
  padding: 0.5rem;
  width: 80%;
  border: none;
  border-radius: 0.5rem 0 0 0.5rem;

  @media screen and (min-width: 1200px) {
    min-width: 500px;
  }
`;

const Label = styled.label`

`
export default function Input({onChange, type, placeholder, name, label}) {
  return (
    <>
      <Label for={name}>{label}</Label>
      <DetectInput onChange={onChange} name={name} type={type} placeholder={placeholder} />
    </>
  );
}
