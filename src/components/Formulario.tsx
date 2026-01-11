import {  FORM, INPUT, BUTTON } from "../types/types"

const Formulario = () => {
  return (
      <FORM >
          <INPUT type="text" placeholder="TAREFA" />
          <BUTTON type='submit'>Criar</BUTTON>
      </FORM>
  )
}

export default Formulario