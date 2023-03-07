import React from "react"
import Button from "./UI/Button"
import classes from './GoogleButton.module.scss'

const GoogleButton: React.FC = () => {
    return (
        <div className={classes['button-google']}>
            <Button><img className={classes['button-google-image']} src="src\assets\images\google-app-symbol.png"/>Sign up with Google</Button>
        </div>
    )
}

export default GoogleButton