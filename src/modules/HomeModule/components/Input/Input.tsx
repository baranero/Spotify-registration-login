import React from "react"
import { InputProps } from "../Form/RegistrationForm"

// export type InputProps = {
//   name: string
//   label: string
//   type: string
//   placeholder: string
// }


const Input = ({name, label, type, placeholder}: {name: string, label: string, type: string, placeholder: string}) => {

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <br/>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input