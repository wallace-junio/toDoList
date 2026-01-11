import {styled} from "styled-components";

const H1 = styled.h1`
  padding: 10px;
  color: white;
  background-color: #87CEFA;
  border-radius: 5px;
`;
const DIV = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 100px;
`;

const FORM = styled.form`   
    width: 100%;
    background-color: #87CEFA;
    height:100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 5px;
    gap: 10px;
    
`
const INPUT = styled.input`
    width: 98%;
    padding: 3px;
`
const BUTTON = styled.button`
    margin-top: 5px;
    width: 100%;
    padding: 3px;
    &:hover {
        background-color: #1E90FF;
    }
`

export {H1, DIV, FORM, INPUT, BUTTON}