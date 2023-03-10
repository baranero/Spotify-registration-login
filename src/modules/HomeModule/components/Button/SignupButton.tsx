import React from "react"
import Button from "../UI/Button"
import classes from './SignupButton.module.scss'

const SignupButton: React.FC = () => {
    return (
        <div className={classes['button-signup']}>
            <Button>Sign up</Button>
        </div>
    )
}

export default SignupButton