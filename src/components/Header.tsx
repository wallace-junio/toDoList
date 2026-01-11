import {styled} from "styled-components";

const H1 = styled.h1`
  padding: 10px;
  color: white;
`;
const DIV = styled.div`
  background-color: #87CEFA;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const Header = () => {
  return (
    <DIV>
        <H1 ><strong>GERENCIADOR DE TAREFAS</strong></H1>
    </DIV>
  )
}

export default Header

