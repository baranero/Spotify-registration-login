import React from "react"
import Button from "./UI/Button"
import classes from './FacebookButton.module.scss'

const FacebookButton: React.FC = () => {
    return (
        <div className={classes['button-facebook']}>
            <Button>
                <div className={classes['button-facebook-image__background']}>
                    <img className={classes['button-facebook-image']} src="src\assets\images\facebook-app-symbol.png"/>
                </div>Sign up with Facebook</Button>
        </div>
    )
}

export default FacebookButton