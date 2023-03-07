import React from "react"
import classes from './Registration.module.scss'

const Registration: React.FC = () => {
    return (
        <>
            <div className={classes.registration}>
                <h1 className={classes['registration-title']}>Spotify</h1>
                <h2 className={classes['registration-subtitle']}>Sign up for free to start listening</h2>
            </div>
        </>
    )
}

export default Registration