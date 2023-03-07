import React, { ReactNode } from "react"
import BreakLine from "../../components/BreakLine"
import FacebookButton from "../../components/Button/FacebookButton"
import GoogleButton from "../../components/Button/GoogleButton"
import RegistrationForm from "../../components/Form/RegistrationForm"
import classes from './Registration.module.scss'

export type Button = {
    children: ReactNode
}

const Registration: React.FC = () => {
    return (
        <>
            <div className={classes.registration}>
                <h1 className={classes['registration-title']}>Spotify</h1>
                <h2 className={classes['registration-subtitle-h2']}>Sign up for free to start listening</h2>
                <FacebookButton/>
                <GoogleButton/>
                <BreakLine/>
                <RegistrationForm/>
                <h4 className={classes['registration-subtitle-h4']}>This appears on your profile.</h4>
            </div>
        </>
    )
}

export default Registration