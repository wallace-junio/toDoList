import { H1, DIV } from "../types/types"
import Formulario from "./Formulario"

const Header = () => {
  return (
    <DIV>
        <div>
            <H1 ><strong>GERENCIADOR DE TAREFAS</strong></H1>
            <Formulario />
        </div>
    </DIV>
  )
}

export default Header

