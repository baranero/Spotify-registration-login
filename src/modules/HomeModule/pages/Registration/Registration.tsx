import React, { ReactNode } from "react"
import BreakLine from "../../components/BreakLine"
import FacebookButton from "../../components/FacebookButton"
import GoogleButton from "../../components/GoogleButton"
import classes from './Registration.module.scss'

export type Button = {
    children: ReactNode
}

const Registration: React.FC = () => {
    return (
        <>
            <div className={classes.registration}>
                <h1 className={classes['registration-title']}>Spotify</h1>
                <h2 className={classes['registration-subtitle']}>Sign up for free to start listening</h2>
                <FacebookButton/>
                <GoogleButton/>
                <BreakLine/>
            </div>
        </>
    )
}

export default Registration