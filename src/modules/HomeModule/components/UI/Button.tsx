import React, { ReactNode } from "react"
import classes from './Button.module.scss'

const Button: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <button className={classes.button}>{children}</button>
        </>
    )

}

export default Button