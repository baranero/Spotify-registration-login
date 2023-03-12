import React from "react"
import classes from './Input.module.scss'
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
      <label className={classes['form-label']} htmlFor={name}>{label}</label>
      <br/>
      <input
        className={classes['form-input']}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input